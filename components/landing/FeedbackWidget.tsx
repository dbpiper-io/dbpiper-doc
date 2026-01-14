"use client"
import { useState } from 'react';
import { MessageSquare, X, Send, Star, ThumbsUp, Bug, Lightbulb, HelpCircle, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';


const CATEGORIES = [
  { id: 'bug', label: 'Bug Report', icon: Bug, color: 'text-red-500' },
  { id: 'feature', label: 'Feature Request', icon: Lightbulb, color: 'text-yellow-500' },
  { id: 'improvement', label: 'Improvement', icon: ThumbsUp, color: 'text-blue-500' },
  { id: 'other', label: 'Other', icon: HelpCircle, color: 'text-gray-500' },
];

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
 
  const [formData, setFormData] = useState({
    email: '',
    category: '',
    message: '',
    rating: 0,
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    setEmailValid(validateEmail(email));
  };

  const isFormValid = formData.email && emailValid && formData.message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    try {
      await supabase.from("feedback").insert(formData)
      toast.success('Thank you for feedback 🎉');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      setIsOpen(false)
    } finally {
      setLoading(false);
    }
  };



  const resetForm = () => {
    setFormData({
      email: '',
      category: '',
      message: '',
      rating: 0,
    })
    setSubmitted(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-black text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
        title="Send Feedback"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white border-2 border-black shadow-[8px_8px_0px_0px_#000] w-full max-w-md">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b-2 border-black">
              <h3 className="font-heading font-bold text-xl uppercase">Send Feedback</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#00C853] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <ThumbsUp className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl uppercase mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your feedback has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Category Selection */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-3">
                      Category
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setFormData({...formData, category: cat.id})}
                            className={`p-3 border-2 flex items-center gap-2 transition-all ${formData.category === cat.id
                              ? 'border-black bg-black text-white'
                              : 'border-gray-200 hover:border-black'
                              }`}
                          >
                            <Icon className={`w-4 h-4 ${formData.category === cat.id ? 'text-white' : cat.color}`} />
                            <span className="text-sm font-medium">{cat.id}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-3">
                      How&apos;s your experience? (Optional)
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({...formData, rating:star})}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="p-1 transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${star <= (hoveredRating || formData.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                              }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleEmailChange(e)}
                      className="w-full p-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                    <label className="font-mono text-xs uppercase tracking-wider mb-3">
                      Your Feedback
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32 p-3 border-2 border-gray-200 focus:border-black focus:outline-none resize-none transition-colors"
                      placeholder="Tell us what's on your mind..."
                      required
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        resetForm();
                      }}
                      className="flex-1 py-3 border-2 border-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading || !formData.category || !formData.message.trim() || !formData.email.trim()}
                      className="flex-1 py-3 bg-black text-white font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin rounded-full" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackWidget;
