
import { useState, useCallback } from 'react';
import { Upload, FileText, File, Image, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface ContentUploaderProps {
  onProjectCreated: (project: any) => void;
}

const ContentUploader = ({ onProjectCreated }: ContentUploaderProps) => {
  const [uploadMode, setUploadMode] = useState<'file' | 'text'>('file');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textContent, setTextContent] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileUpload = async (file: File) => {
    if (!projectTitle.trim()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập tên dự án trước khi tải file",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    // Simulate file processing
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 10;
      });
    }, 200);

    try {
      // Simulate AI content analysis
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const mockProject = {
        id: Date.now(),
        title: projectTitle,
        fileName: file.name,
        fileType: file.type,
        content: {
          slides: [
            {
              id: 1,
              title: "Giới thiệu chủ đề",
              content: "Nội dung slide 1 được AI phân tích từ file của bạn...",
              duration: 30
            },
            {
              id: 2,
              title: "Nội dung chính",
              content: "Nội dung slide 2 với các điểm chính được trích xuất...",
              duration: 45
            },
            {
              id: 3,
              title: "Kết luận",
              content: "Tóm tắt và kết luận từ nội dung được phân tích...",
              duration: 25
            }
          ],
          totalDuration: 100,
          script: "Xin chào các bạn, hôm nay chúng ta sẽ cùng tìm hiểu về..."
        },
        createdAt: new Date().toISOString(),
        status: 'analyzed'
      };

      setProgress(100);
      onProjectCreated(mockProject);
      
      toast({
        title: "Thành công!",
        description: `Đã phân tích nội dung từ ${file.name}. Bạn có thể chuyển sang bước tiếp theo.`,
      });

    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi phân tích nội dung. Vui lòng thử lại.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      clearInterval(progressInterval);
    }
  };

  const handleTextSubmit = async () => {
    if (!projectTitle.trim() || !textContent.trim()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập đầy đủ tên dự án và nội dung",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 10;
      });
    }, 200);

    try {
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      const mockProject = {
        id: Date.now(),
        title: projectTitle,
        content: {
          slides: [
            {
              id: 1,
              title: "Phần mở đầu",
              content: textContent.substring(0, 200) + "...",
              duration: 30
            },
            {
              id: 2,
              title: "Nội dung chính",
              content: "Nội dung được AI phân tích và cấu trúc lại...",
              duration: 60
            },
            {
              id: 3,
              title: "Tổng kết",
              content: "Kết luận và tóm tắt các điểm quan trọng...",
              duration: 30
            }
          ],
          totalDuration: 120,
          script: textContent
        },
        createdAt: new Date().toISOString(),
        status: 'analyzed'
      };

      setProgress(100);
      onProjectCreated(mockProject);
      
      toast({
        title: "Thành công!",
        description: "Đã phân tích và cấu trúc nội dung văn bản. Bạn có thể chuyển sang bước tiếp theo.",
      });

    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi phân tích văn bản. Vui lòng thử lại.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      clearInterval(progressInterval);
    }
  };

  return (
    <div className="space-y-6">
      {/* Project Title Input */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600" />
            Thông tin dự án
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="project-title">Tên dự án</Label>
              <Input
                id="project-title"
                placeholder="Nhập tên cho bài giảng của bạn..."
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Mode Selection */}
      <div className="flex gap-4">
        <Button
          variant={uploadMode === 'file' ? 'default' : 'outline'}
          onClick={() => setUploadMode('file')}
          className={uploadMode === 'file' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : ''}
        >
          <Upload className="h-4 w-4 mr-2" />
          Tải file lên
        </Button>
        <Button
          variant={uploadMode === 'text' ? 'default' : 'outline'}
          onClick={() => setUploadMode('text')}
          className={uploadMode === 'text' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : ''}
        >
          <FileText className="h-4 w-4 mr-2" />
          Nhập văn bản
        </Button>
      </div>

      {/* File Upload */}
      {uploadMode === 'file' && (
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Tải lên nội dung</CardTitle>
            <CardDescription>
              Hỗ trợ PDF, PowerPoint, Word, và các file văn bản khác
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                dragActive
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-300 hover:border-purple-400 hover:bg-gray-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                  <Upload className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Kéo thả file vào đây hoặc click để chọn
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    PDF, PPTX, DOCX, TXT (tối đa 50MB)
                  </p>
                </div>
                <Input
                  type="file"
                  accept=".pdf,.pptx,.docx,.txt,.ppt,.doc"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                  className="hidden"
                  id="file-upload"
                />
                <Label htmlFor="file-upload">
                  <Button variant="outline" className="cursor-pointer" asChild>
                    <span>Chọn file</span>
                  </Button>
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Text Input */}
      {uploadMode === 'text' && (
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Nhập nội dung văn bản</CardTitle>
            <CardDescription>
              Nhập hoặc dán nội dung bài giảng để AI phân tích và tạo slides
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder="Nhập nội dung bài giảng của bạn tại đây..."
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                rows={10}
                className="resize-none"
              />
              <Button
                onClick={handleTextSubmit}
                disabled={isProcessing || !textContent.trim() || !projectTitle.trim()}
                className="bg-gradient-to-r from-purple-600 to-blue-600"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Đang phân tích...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Phân tích nội dung
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Processing Progress */}
      {isProcessing && (
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Đang xử lý nội dung...</span>
                <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Loader2 className="h-4 w-4 animate-spin" />
                AI đang phân tích và cấu trúc nội dung thành các slide...
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContentUploader;
