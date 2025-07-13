'use client';

import { useState } from 'react';
import { useRegisterTree } from '../../hooks/useTrees';

export default function TreeRegistrationForm() {
  const [formData, setFormData] = useState({
    species: '',
    latitude: '',
    longitude: '',
    address: '',
    photo: null as File | null
  });
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const registerTreeMutation = useRegisterTree();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: file
      }));
      
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString()
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please enter coordinates manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.photo) {
      alert('Please select a photo of your tree');
      return;
    }

    if (!formData.latitude || !formData.longitude) {
      alert('Please provide location coordinates');
      return;
    }

    setIsSubmitting(true);

    try {
      await registerTreeMutation.mutateAsync({
        species: formData.species,
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude),
        address: formData.address,
        photo: formData.photo
      });

      // Reset form
      setFormData({
        species: '',
        latitude: '',
        longitude: '',
        address: '',
        photo: null
      });
      setPreviewUrl('');
      
      alert('Tree registered successfully! 🌳');
    } catch (error) {
      console.error('Error registering tree:', error);
      alert('Failed to register tree. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const commonSpecies = [
    'Mango',
    'Oak',
    'Maple',
    'Pine',
    'Apple',
    'Cherry',
    'Palm',
    'Banyan',
    'Neem',
    'Other'
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Register New Tree</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tree Species */}
        <div>
          <label htmlFor="species" className="block text-sm font-medium text-green-700 mb-2">
            Tree Species *
          </label>
          <select
            id="species"
            name="species"
            value={formData.species}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
          >
            <option value="">Select a species</option>
            {commonSpecies.map(species => (
              <option key={species} value={species}>{species}</option>
            ))}
          </select>
        </div>

        {/* Location Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-green-800">Location</h3>
          
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleGetCurrentLocation}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              📍 Get Current Location
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="latitude" className="block text-sm font-medium text-green-700 mb-2">
                Latitude *
              </label>
              <input
                id="latitude"
                name="latitude"
                type="number"
                step="any"
                value={formData.latitude}
                onChange={handleInputChange}
                required
                placeholder="25.2048"
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="longitude" className="block text-sm font-medium text-green-700 mb-2">
                Longitude *
              </label>
              <input
                id="longitude"
                name="longitude"
                type="number"
                step="any"
                value={formData.longitude}
                onChange={handleInputChange}
                required
                placeholder="55.2708"
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-green-700 mb-2">
              Address (Optional)
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Dubai, UAE"
              className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label htmlFor="photo" className="block text-sm font-medium text-green-700 mb-2">
            Tree Photo *
          </label>
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            required
            className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
          />
          
          {previewUrl && (
            <div className="mt-4">
              <img
                src={previewUrl}
                alt="Tree preview"
                className="w-full max-w-md h-48 object-cover rounded-lg border border-green-200"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || registerTreeMutation.isPending}
          className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors"
        >
          {isSubmitting || registerTreeMutation.isPending ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Registering Tree...
            </span>
          ) : (
            'Register Tree 🌳'
          )}
        </button>
      </form>

      {/* Tips */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <h4 className="font-semibold text-green-800 mb-2">💡 Tips for better tree registration:</h4>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Take a clear photo showing the full tree</li>
          <li>• Ensure GPS coordinates are accurate</li>
          <li>• Choose the correct species for better care recommendations</li>
          <li>• Add a detailed address for easier location tracking</li>
        </ul>
      </div>
    </div>
  );
}