
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

  const createMockProject = (title: string, source: 'file' | 'text', fileName?: string) => {
    const mockSlides = [
      {
        id: 1,
        title: "Giới thiệu về Trí tuệ Nhân tạo",
        content: "Trí tuệ nhân tạo (AI) là khả năng của máy tính mô phỏng các quá trình tư duy của con người. AI đã trở thành một phần không thể thiếu trong cuộc sống hiện đại, từ các ứng dụng di động đến hệ thống tự động hóa trong công nghiệp.",
        duration: 45,
        keyPoints: [
          "Định nghĩa AI và các khái niệm cơ bản",
          "Lịch sử phát triển của AI", 
          "Ứng dụng AI trong thực tế"
        ]
      },
      {
        id: 2,
        title: "Các loại hình Trí tuệ Nhân tạo",
        content: "AI được chia thành nhiều loại khác nhau: AI hẹp (Narrow AI) chỉ thực hiện một nhiệm vụ cụ thể, AI tổng quát (General AI) có thể thực hiện nhiều nhiệm vụ như con người, và AI siêu việt (Super AI) vượt trội hơn con người.",
        duration: 50,
        keyPoints: [
          "AI hẹp (Narrow AI) - hiện tại",
          "AI tổng quát (General AI) - tương lai gần",
          "AI siêu việt (Super AI) - tương lai xa"
        ]
      },
      {
        id: 3,
        title: "Machine Learning và Deep Learning",
        content: "Machine Learning là nhánh của AI cho phép máy tính học từ dữ liệu mà không cần lập trình cụ thể. Deep Learning sử dụng mạng neural nhân tạo để mô phỏng cách hoạt động của não người, giúp giải quyết các bài toán phức tạp.",
        duration: 55,
        keyPoints: [
          "Khái niệm Machine Learning",
          "Supervised vs Unsupervised Learning",
          "Deep Learning và Neural Networks"
        ]
      },
      {
        id: 4,
        title: "Ứng dụng AI trong đời sống",
        content: "AI hiện diện khắp nơi: trợ lý ảo như Siri và Alexa, hệ thống gợi ý trên Netflix và YouTube, xe tự lái, chẩn đoán y tế, dịch thuật tự động, và nhiều ứng dụng khác đang thay đổi cách chúng ta sống và làm việc.",
        duration: 40,
        keyPoints: [
          "AI trong giải trí và truyền thông",
          "AI trong y tế và chăm sóc sức khỏe",
          "AI trong giao thông và logistics"
        ]
      },
      {
        id: 5,
        title: "Thách thức và Tương lai của AI",
        content: "Mặc dù mang lại nhiều lợi ích, AI cũng đặt ra những thách thức về đạo đức, quyền riêng tư, và tác động đến việc làm. Chúng ta cần phát triển AI có trách nhiệm để đảm bảo lợi ích cho toàn nhân loại.",
        duration: 45,
        keyPoints: [
          "Thách thức đạo đức và xã hội",
          "Tác động đến thị trường lao động",
          "Tương lai của AI và con người"
        ]
      }
    ];

    return {
      id: Date.now(),
      title,
      fileName: fileName || `${title}.txt`,
      fileType: fileName ? 'application/pdf' : 'text/plain',
      content: {
        slides: mockSlides,
        totalDuration: mockSlides.reduce((sum, slide) => sum + slide.duration, 0),
        script: mockSlides.map(slide => 
          `${slide.title}. ${slide.content} ${slide.keyPoints.join('. ')}.`
        ).join(' '),
        summary: "Bài giảng tổng quan về Trí tuệ Nhân tạo, bao gồm định nghĩا, phân loại, công nghệ cốt lõi, ứng dụng thực tế và những thách thức trong tương lai.",
        language: "vi",
        estimatedViewTime: "4-5 phút"
      },
      createdAt: new Date().toISOString(),
      status: 'analyzed',
      source: source
    };
  };

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

    // Simulate realistic processing steps
    const steps = [
      { progress: 15, message: "Đang tải file lên..." },
      { progress: 35, message: "Đang trích xuất văn bản từ PDF..." },
      { progress: 55, message: "AI đang phân tích nội dung..." },
      { progress: 75, message: "Đang tạo cấu trúc bài giảng..." },
      { progress: 90, message: "Đang tối ưu hóa nội dung..." },
      { progress: 100, message: "Hoàn thành!" }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProgress(step.progress);
    }

    try {
      const mockProject = createMockProject(projectTitle, 'file', file.name);
      onProjectCreated(mockProject);
      
      toast({
        title: "Thành công!",
        description: `Đã phân tích nội dung từ ${file.name}. Chuyển sang bước tiếp theo...`,
      });

    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi phân tích nội dung. Vui lòng thử lại.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
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

    const steps = [
      { progress: 20, message: "Đang phân tích văn bản..." },
      { progress: 45, message: "AI đang tạo cấu trúc bài giảng..." },
      { progress: 70, message: "Đang tối ưu hóa nội dung..." },
      { progress: 100, message: "Hoàn thành!" }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 400));
      setProgress(step.progress);
    }

    try {
      const mockProject = createMockProject(projectTitle, 'text');
      onProjectCreated(mockProject);
      
      toast({
        title: "Thành công!",
        description: "Đã phân tích và cấu trúc nội dung văn bản. Chuyển sang bước tiếp theo...",
      });

    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi phân tích văn bản. Vui lòng thử lại.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
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
                {progress < 20 && "Đang tải và kiểm tra file..."}
                {progress >= 20 && progress < 40 && "Đang trích xuất nội dung từ file..."}
                {progress >= 40 && progress < 60 && "AI đang phân tích và hiểu nội dung..."}
                {progress >= 60 && progress < 80 && "Đang tạo cấu trúc bài giảng logic..."}
                {progress >= 80 && progress < 100 && "Đang hoàn thiện và tối ưu hóa..."}
                {progress >= 100 && "Hoàn thành! Chuẩn bị chuyển bước..."}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContentUploader;
