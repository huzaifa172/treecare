'use client';

import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { 
  Camera, 
  MapPin, 
  Trees, 
  QrCode, 
  Brain, 
  CheckCircle,
  AlertCircle,
  Loader2,
  Upload,
  X
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRegisterTree } from '@/hooks/useTrees';

interface TreeSpecies {
  species: string;
  confidence: number;
  description: string;
  careTips: string[];
}

interface LocationValidation {
  isValid: boolean;
  confidence: number;
  locationType: string;
  environmentalFactors: string[];
}

export default function TreeRegistration() {
  const [step, setStep] = useState(1);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [address, setAddress] = useState('');
  const [species, setSpecies] = useState('');
  const [aiSpecies, setAiSpecies] = useState<TreeSpecies | null>(null);
  const [locationValidation, setLocationValidation] = useState<LocationValidation | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [qrCode, setQrCode] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const registerTreeMutation = useRegisterTree();

  const handlePhotoCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLocationCapture = async () => {
    if (navigator.geolocation) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
          });
        });

        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });

        // Reverse geocoding to get address
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
          );
          const data = await response.json();
          setAddress(data.display_name || 'Location captured');
        } catch (error) {
          setAddress(`Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`);
        }

        toast.success('Location captured successfully!');
      } catch (error) {
        toast.error('Failed to get location. Please try again.');
      }
    } else {
      toast.error('Geolocation is not supported by your browser.');
    }
  };

  const analyzeSpeciesWithAI = async () => {
    if (!photo) {
      toast.error('Please capture a photo first');
      return;
    }

    setIsAnalyzing(true);
    try {
      // Convert photo to base64
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(',')[1]); // Remove data:image/jpeg;base64, prefix
        };
        reader.readAsDataURL(photo);
      });

      // Call AI service
      const response = await fetch('/api/ai/detect-species', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify({ imageBase64: base64 })
      });

      const data = await response.json();
      
      if (data.success) {
        setAiSpecies(data.data);
        setSpecies(data.data.species);
        toast.success(`AI detected: ${data.data.species} (${data.data.confidence}% confidence)`);
      } else {
        toast.error('Failed to analyze species with AI');
      }
    } catch (error) {
      console.error('AI analysis error:', error);
      toast.error('Failed to analyze species with AI');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const validateLocationWithAI = async () => {
    if (!photo || !location) {
      toast.error('Please capture both photo and location first');
      return;
    }

    setIsValidating(true);
    try {
      // Convert photo to base64
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(',')[1]);
        };
        reader.readAsDataURL(photo);
      });

      // Call AI service
      const response = await fetch('/api/ai/validate-location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify({ 
          imageBase64: base64,
          gpsData: location
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setLocationValidation(data.data);
        if (data.data.isValid) {
          toast.success('Location validated successfully!');
        } else {
          toast.error('Location validation failed. Please check your GPS coordinates.');
        }
      } else {
        toast.error('Failed to validate location with AI');
      }
    } catch (error) {
      console.error('Location validation error:', error);
      toast.error('Failed to validate location with AI');
    } finally {
      setIsValidating(false);
    }
  };

  const generateQRCode = () => {
    // Generate a unique QR code
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const qrCodeValue = `TREE_${timestamp}_${random}`;
    setQrCode(qrCodeValue);
    return qrCodeValue;
  };

  const handleSubmit = async () => {
    if (!photo || !location || !species) {
      toast.error('Please complete all required fields');
      return;
    }

    const qrCodeValue = generateQRCode();

    try {
      await registerTreeMutation.mutateAsync({
        species,
        latitude: location.lat,
        longitude: location.lng,
        address,
        photo
      });

      toast.success('Tree registered successfully!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Failed to register tree');
    }
  };

  const steps = [
    { id: 1, title: 'Capture Photo', description: 'Take a photo of your tree' },
    { id: 2, title: 'AI Analysis', description: 'Analyze species and validate location' },
    { id: 3, title: 'Confirm Details', description: 'Review and submit registration' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🌱 Register New Tree</h1>
          <p className="text-gray-600">Use AI-powered tools to register your tree with precision</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((stepItem, index) => (
              <div key={stepItem.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step >= stepItem.id 
                    ? 'bg-green-600 border-green-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-500'
                }`}>
                  {step > stepItem.id ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="font-medium">{stepItem.id}</span>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{stepItem.title}</p>
                  <p className="text-xs text-gray-500">{stepItem.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    step > stepItem.id ? 'bg-green-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Capture Tree Photo</h2>
                <p className="text-gray-600 mb-6">
                  Take a clear photo of your tree. This will be used for AI species detection and location validation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Photo Capture */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">📸 Tree Photo</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {photoPreview ? (
                      <div className="space-y-4">
                        <img
                          src={photoPreview}
                          alt="Tree preview"
                          className="w-full h-48 object-cover rounded-lg mx-auto"
                        />
                        <button
                          onClick={() => {
                            setPhoto(null);
                            setPhotoPreview('');
                          }}
                          className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                          <X className="w-4 h-4" />
                          <span>Remove Photo</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Camera className="w-12 h-12 text-gray-400 mx-auto" />
                        <div>
                          <p className="text-gray-600">Click to capture or upload a photo</p>
                          <p className="text-sm text-gray-500">JPG, PNG up to 10MB</p>
                        </div>
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                          <Camera className="w-4 h-4" />
                          <span>Capture Photo</span>
                        </button>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoCapture}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Location Capture */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">📍 Location</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {location ? (
                      <div className="space-y-4">
                        <MapPin className="w-12 h-12 text-green-600 mx-auto" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Location Captured</p>
                          <p className="text-xs text-gray-600">{address}</p>
                          <p className="text-xs text-gray-500">
                            Lat: {location.lat.toFixed(6)}, Lng: {location.lng.toFixed(6)}
                          </p>
                        </div>
                        <button
                          onClick={handleLocationCapture}
                          className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          <MapPin className="w-4 h-4" />
                          <span>Update Location</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto" />
                        <div>
                          <p className="text-gray-600">Capture your current location</p>
                          <p className="text-sm text-gray-500">Used for GPS validation</p>
                        </div>
                        <button
                          onClick={handleLocationCapture}
                          className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          <MapPin className="w-4 h-4" />
                          <span>Capture Location</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  disabled={!photo || !location}
                  className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next: AI Analysis</span>
                  <Brain className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 2: AI Analysis</h2>
                <p className="text-gray-600 mb-6">
                  Our AI will analyze your tree species and validate the location for accuracy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Species Analysis */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">🤖 Species Detection</h3>
                  <div className="border rounded-lg p-4">
                    {aiSpecies ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{aiSpecies.species}</span>
                          <span className="text-sm text-gray-600">{aiSpecies.confidence}% confidence</span>
                        </div>
                        <p className="text-sm text-gray-600">{aiSpecies.description}</p>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-2">Care Tips:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {aiSpecies.careTips.map((tip, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-green-500 mt-1">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Brain className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Click to analyze species with AI</p>
                      </div>
                    )}
                    <button
                      onClick={analyzeSpeciesWithAI}
                      disabled={isAnalyzing || !photo}
                      className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
                    >
                      {isAnalyzing ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Brain className="w-4 h-4" />
                      )}
                      <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Species'}</span>
                    </button>
                  </div>
                </div>

                {/* Location Validation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">🔍 Location Validation</h3>
                  <div className="border rounded-lg p-4">
                    {locationValidation ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">Validation Result</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            locationValidation.isValid 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {locationValidation.isValid ? 'Valid' : 'Invalid'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Confidence: {locationValidation.confidence}%
                        </p>
                        <p className="text-sm text-gray-600">
                          Type: {locationValidation.locationType}
                        </p>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-2">Environmental Factors:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {locationValidation.environmentalFactors.map((factor, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>{factor}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Click to validate location with AI</p>
                      </div>
                    )}
                    <button
                      onClick={validateLocationWithAI}
                      disabled={isValidating || !photo || !location}
                      className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                      {isValidating ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <MapPin className="w-4 h-4" />
                      )}
                      <span>{isValidating ? 'Validating...' : 'Validate Location'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  <span>Back</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!aiSpecies || !locationValidation}
                  className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next: Confirm Details</span>
                  <CheckCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Confirm Details</h2>
                <p className="text-gray-600 mb-6">
                  Review all information before registering your tree.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tree Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">🌳 Tree Information</h3>
                  <div className="border rounded-lg p-4 space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Species</label>
                      <input
                        type="text"
                        value={species}
                        onChange={(e) => setSpecies(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter tree species"
                      />
                    </div>
                    {aiSpecies && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-green-800">
                          <strong>AI Suggestion:</strong> {aiSpecies.species} ({aiSpecies.confidence}% confidence)
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Location Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">📍 Location Details</h3>
                  <div className="border rounded-lg p-4 space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter address"
                      />
                    </div>
                    {location && (
                      <div className="text-sm text-gray-600">
                        <p><strong>Latitude:</strong> {location.lat.toFixed(6)}</p>
                        <p><strong>Longitude:</strong> {location.lng.toFixed(6)}</p>
                      </div>
                    )}
                    {locationValidation && (
                      <div className={`border rounded-lg p-2 ${
                        locationValidation.isValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                      }`}>
                        <p className={`text-sm ${
                          locationValidation.isValid ? 'text-green-800' : 'text-red-800'
                        }`}>
                          <strong>AI Validation:</strong> {locationValidation.isValid ? 'Valid' : 'Invalid'} 
                          ({locationValidation.confidence}% confidence)
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* QR Code Preview */}
              {qrCode && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">🔗 QR Code</h3>
                  <div className="border rounded-lg p-4 text-center">
                    <QrCode className="w-32 h-32 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">QR Code: {qrCode}</p>
                    <p className="text-xs text-gray-500">This will be generated for your tree</p>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  <span>Back</span>
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={registerTreeMutation.isPending || !species || !location}
                  className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {registerTreeMutation.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Trees className="w-4 h-4" />
                  )}
                  <span>{registerTreeMutation.isPending ? 'Registering...' : 'Register Tree'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}