'use client';

import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { 
  QrCode, 
  Camera, 
  MapPin, 
  CheckCircle, 
  MessageCircle, 
  Trees, 
  Users,
  Activity,
  Bell
} from 'lucide-react';
import { useAssignedTrees, useUpdateTreeCare } from '@/hooks/useTrees';
import { useCurrentUser } from '@/hooks/useAuth';

interface AssignedTree {
  id: string;
  qrCode: string;
  species: string;
  location: { latitude: number; longitude: number; address: string };
  healthScore: number;
  status: string;
  plantedAt: string;
  lastCareAt?: string;
  guardian?: { id: string; name: string; avatar: string };
}

interface CareUpdate {
  treeId: string;
  healthStatus: string;
  notes: string;
  photoUrl: string;
  gpsLocation: { lat: number; lng: number };
  careChecklist: string[];
}

export default function VendorPanel() {
  const [selectedTree, setSelectedTree] = useState<AssignedTree | null>(null);
  const [showScanner, setShowScanner] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [careUpdate, setCareUpdate] = useState<Partial<CareUpdate>>({});
  const [guardianBotMessage, setGuardianBotMessage] = useState('');
  const [isGuardianBotOpen, setIsGuardianBotOpen] = useState(false);

  const queryClient = useQueryClient();

  // Fetch assigned trees
  const { data: assignedTreesData, isLoading } = useAssignedTrees();
  const assignedTrees = assignedTreesData?.data?.assignedTrees || [];

  // Fetch user profile
  const { data: userProfile } = useCurrentUser();

  // Update tree care mutation
  const updateCareMutation = useUpdateTreeCare();

  // GuardianBot AI assistant
  const getGuardianBotResponse = async (message: string) => {
    try {
      const response = await fetch('/api/ai/guardian-bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          treeId: selectedTree?.id,
          context: 'vendor-care'
        })
      });
      const data = await response.json();
      return data.response;
    } catch (error) {
      return 'Sorry, I\'m having trouble connecting right now.';
    }
  };

  const handleSendMessage = async () => {
    if (!guardianBotMessage.trim()) return;
    
    const userMessage = guardianBotMessage;
    setGuardianBotMessage('');
    
    // Add user message to chat
    const userMsg: { type: 'user' | 'ai'; content: string } = { type: 'user', content: userMessage };
    setChatMessages(prev => [...prev, userMsg]);
    
    // Get AI response
    const aiResponse = await getGuardianBotResponse(userMessage);
    const aiMsg: { type: 'user' | 'ai'; content: string } = { type: 'ai', content: aiResponse };
    setChatMessages(prev => [...prev, aiMsg]);
  };

  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'ai', content: string}>>([
    { type: 'ai', content: 'Hello! I\'m GuardianBot, your AI care assistant. How can I help you today?' }
  ]);

  const careChecklistItems = [
    'Check soil moisture',
    'Inspect for pests',
    'Measure growth',
    'Prune if needed',
    'Fertilize if required',
    'Check for diseases'
  ];

  const handleQRScan = (qrCode: string) => {
    const tree = assignedTrees?.find(t => t.qrCode === qrCode);
    if (tree) {
      setSelectedTree(tree);
      setShowScanner(false);
    } else {
      toast.error('Tree not found in your assigned list');
    }
  };

  const handlePhotoCapture = async () => {
    try {
      // Get current location
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // Simulate photo capture (in real app, use camera API)
      const photoUrl = 'https://via.placeholder.com/400x300?text=Tree+Photo';
      
      setCareUpdate(prev => ({
        ...prev,
        photoUrl,
        gpsLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      }));
      
      setShowCamera(false);
      toast.success('Photo captured with GPS location!');
    } catch (error) {
      toast.error('Failed to get location or capture photo');
    }
  };

  const handleCareUpdate = () => {
    if (!selectedTree || !careUpdate.healthStatus || !careUpdate.photoUrl) {
      toast.error('Please fill all required fields');
      return;
    }

    updateCareMutation.mutate({
      treeId: selectedTree.id,
      healthStatus: careUpdate.healthStatus,
      notes: careUpdate.notes || '',
      photoUrl: careUpdate.photoUrl,
      gpsLocation: careUpdate.gpsLocation,
      careChecklist: careUpdate.careChecklist || []
    });

    // Reset form after successful update
    if (updateCareMutation.isSuccess) {
      setSelectedTree(null);
      setCareUpdate({});
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
        <div className="max-w-md mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-20 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Field Agent Panel</h1>
              <p className="text-sm text-gray-600">Welcome back, {userProfile?.name}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsGuardianBotOpen(!isGuardianBotOpen)}
                className="p-2 bg-green-100 rounded-full text-green-600 hover:bg-green-200"
              >
                <MessageCircle size={20} />
              </button>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {assignedTrees?.length || 0}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-4">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setShowScanner(true)}
              className="flex flex-col items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <QrCode className="w-6 h-6 text-blue-600 mb-1" />
              <span className="text-sm font-medium text-blue-700">Scan QR</span>
            </button>
            <button
              onClick={() => setShowCamera(true)}
              className="flex flex-col items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <Camera className="w-6 h-6 text-green-600 mb-1" />
              <span className="text-sm font-medium text-green-700">Camera</span>
            </button>
          </div>
        </div>

        {/* Assigned Trees */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-3">My Assigned Trees</h2>
          <div className="space-y-3">
            {assignedTrees?.map((tree) => (
              <div
                key={tree.id}
                onClick={() => setSelectedTree(tree)}
                className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{tree.species}</h3>
                    <p className="text-sm text-gray-600">QR: {tree.qrCode}</p>
                    <p className="text-sm text-gray-500">{tree.guardian?.name || 'No guardian'}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tree.healthScore >= 80 ? 'bg-green-100 text-green-700' :
                      tree.healthScore >= 60 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {tree.healthScore}%
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {tree.lastCareAt ? new Date(tree.lastCareAt).toLocaleDateString() : 'No care yet'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GuardianBot Chat */}
        {isGuardianBotOpen && (
          <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-lg border flex flex-col">
            <div className="bg-green-600 text-white p-3 rounded-t-lg">
              <h3 className="font-semibold">🤖 GuardianBot</h3>
            </div>
            <div className="flex-1 p-3 overflow-y-auto space-y-2">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-blue-100 ml-8' 
                      : 'bg-gray-100 mr-8'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              ))}
            </div>
            <div className="p-3 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={guardianBotMessage}
                  onChange={(e) => setGuardianBotMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask GuardianBot..."
                  className="flex-1 px-3 py-2 border rounded-lg text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* QR Scanner Modal */}
        {showScanner && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Scan QR Code</h3>
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-16 h-16 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Point your camera at the tree's QR code
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowScanner(false)}
                  className="flex-1 px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Simulate QR scan
                    handleQRScan('TREE001');
                    setShowScanner(false);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Scan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Camera Modal */}
        {showCamera && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Take Photo</h3>
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-16 h-16 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Capture tree photo with GPS location
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowCamera(false)}
                  className="flex-1 px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePhotoCapture}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg"
                >
                  Capture
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tree Care Modal */}
        {selectedTree && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4">Update Tree Care</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tree</label>
                  <p className="text-gray-900">{selectedTree.species} ({selectedTree.qrCode})</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Health Status</label>
                  <select
                    value={careUpdate.healthStatus || ''}
                    onChange={(e) => setCareUpdate(prev => ({ ...prev, healthStatus: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="">Select status</option>
                    <option value="HEALTHY">Healthy</option>
                    <option value="MODERATE">Moderate</option>
                    <option value="POOR">Poor</option>
                    <option value="CRITICAL">Critical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Notes</label>
                  <textarea
                    value={careUpdate.notes || ''}
                    onChange={(e) => setCareUpdate(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-lg"
                    rows={3}
                    placeholder="Add care notes..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Care Checklist</label>
                  <div className="space-y-2">
                    {careChecklistItems.map((item) => (
                      <label key={item} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={careUpdate.careChecklist?.includes(item) || false}
                          onChange={(e) => {
                            const checklist = careUpdate.careChecklist || [];
                            if (e.target.checked) {
                              setCareUpdate(prev => ({
                                ...prev,
                                careChecklist: [...checklist, item]
                              }));
                            } else {
                              setCareUpdate(prev => ({
                                ...prev,
                                careChecklist: checklist.filter(i => i !== item)
                              }));
                            }
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {careUpdate.photoUrl && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Photo</label>
                    <img
                      src={careUpdate.photoUrl}
                      alt="Tree photo"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                )}

                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setSelectedTree(null);
                      setCareUpdate({});
                    }}
                    className="flex-1 px-4 py-2 border rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCareUpdate}
                    disabled={updateCareMutation.isPending}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50"
                  >
                    {updateCareMutation.isPending ? 'Updating...' : 'Update Care'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}