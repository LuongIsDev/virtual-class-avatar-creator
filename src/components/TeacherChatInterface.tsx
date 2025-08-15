import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, User, Bot, X, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'teacher';
  timestamp: Date;
}

interface TeacherChatInterfaceProps {
  isVideoPlaying: boolean;
  onResumeVideo: () => void;
  onPauseVideo: () => void;
}

const TeacherChatInterface = ({ isVideoPlaying, onResumeVideo, onPauseVideo }: TeacherChatInterfaceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Xin chào! Tôi là giáo viên ảo của bạn. Bạn có thắc mắc gì về bài giảng không?",
      sender: 'teacher',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    // Pause video when user starts chatting
    if (isVideoPlaying) {
      onPauseVideo();
    }

    const userMessage: Message = {
      id: messages.length + 1,
      content: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate teacher response
    setTimeout(() => {
      const teacherResponse: Message = {
        id: messages.length + 2,
        content: generateTeacherResponse(newMessage),
        sender: 'teacher',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, teacherResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateTeacherResponse = (userMessage: string): string => {
    const responses = [
      "Đó là một câu hỏi rất hay! Để giải thích điều này...",
      "Tôi hiểu thắc mắc của bạn. Hãy cùng phân tích vấn đề này...",
      "Rất tốt khi bạn chú ý đến điểm này. Theo như tài liệu...",
      "Câu hỏi này thường gặp trong thực tế. Cách tiếp cận tốt nhất là...",
      "Bạn đã nắm được ý chính. Để bổ sung thêm..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    if (isVideoPlaying) {
      onPauseVideo();
    }
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleResumeLesson = () => {
    onResumeVideo();
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleOpenChat}
          className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-full w-14 h-14 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Badge 
          variant="secondary" 
          className="absolute -top-2 -left-2 bg-red-500 text-white animate-pulse"
        >
          ?
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80">
      <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <CardTitle className="text-sm">Giáo viên ảo</CardTitle>
                <p className="text-xs text-gray-600">Luôn sẵn sàng giải đáp</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCloseChat}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          {/* Messages */}
          <ScrollArea className="h-80 px-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-start gap-2 max-w-[85%]">
                    {message.sender === 'teacher' && (
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                    )}
                    
                    <div
                      className={`px-3 py-2 rounded-lg text-sm ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {message.content}
                    </div>
                    
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2 mb-3">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Nhập câu hỏi của bạn..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!newMessage.trim() || isTyping}
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            <Button
              onClick={handleResumeLesson}
              variant="outline"
              size="sm"
              className="w-full"
            >
              <Play className="h-4 w-4 mr-2" />
              Tiếp tục bài giảng
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherChatInterface;