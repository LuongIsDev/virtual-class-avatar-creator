
import { useState } from 'react';
import { Upload, Play, Settings, BookOpen, Video, Users, Sparkles, ArrowLeft, ArrowRight, GraduationCap, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ContentUploader from '@/components/ContentUploader';
import AvatarSelector from '@/components/AvatarSelector';
import VideoPreview from '@/components/VideoPreview';
import ProjectDashboard from '@/components/ProjectDashboard';

const Index = () => {
  const [currentStep, setCurrentStep] = useState('upload'); // 'upload', 'avatar', 'generating', 'preview', 'projects'
  const [project, setProject] = useState(null);

  const handleProjectCreated = (newProject: any) => {
    setProject(newProject);
    // Automatically move to avatar selection step
    setTimeout(() => {
      setCurrentStep('avatar');
    }, 1000);
  };

  const handleProjectUpdated = (updatedProject: any) => {
    setProject(updatedProject);
  };

  const handleAvatarComplete = () => {
    setCurrentStep('generating');
    // Simulate video generation
    setTimeout(() => {
      setCurrentStep('preview');
    }, 3000);
  };

  const handleBackToUpload = () => {
    setCurrentStep('upload');
    setProject(null);
  };

  const handleViewProjects = () => {
    setCurrentStep('projects');
  };

  const handleBackFromProjects = () => {
    setCurrentStep('upload');
  };

  const renderStepIndicator = () => {
    const steps = [
      { id: 'upload', label: 'Tải Nội Dung', icon: Upload },
      { id: 'avatar', label: 'Chọn Avatar', icon: Users },
      { id: 'generating', label: 'Tạo Video', icon: Play },
      { id: 'preview', label: 'Hoàn Thành', icon: Video },
    ];

    return (
      <div className="flex items-center justify-center space-x-4 mb-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = step.id === currentStep;
          const isCompleted = steps.findIndex(s => s.id === currentStep) > index;
          const isAccessible = 
            step.id === 'upload' || 
            (step.id === 'avatar' && project) ||
            (step.id === 'generating' && project?.avatar) ||
            (step.id === 'preview' && project?.avatar);

          return (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent' 
                  : isCompleted
                  ? 'bg-green-100 text-green-800 border-green-300'
                  : isAccessible
                  ? 'bg-white border-gray-300 text-gray-700'
                  : 'bg-gray-100 border-gray-200 text-gray-400'
              }`}>
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduAI Studio
                </h1>
                <p className="text-sm text-gray-600">Nền tảng tạo bài giảng thông minh</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Cài đặt
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleViewProjects}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Dự Án
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Sparkles className="h-4 w-4 mr-2" />
                Nâng cấp Pro
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {currentStep !== 'projects' && (
          <>
            {/* Hero Section - Only show on upload step */}
            {currentStep === 'upload' && (
              <div className="text-center mb-12">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                    <Brain className="h-4 w-4 mr-2" />
                    Trí tuệ nhân tạo trong giáo dục
                  </div>
                  <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Tạo Bài Giảng Tương Tác
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Biến tài liệu học tập thành video bài giảng sinh động với công nghệ AI tiên tiến. 
                    Chỉ cần tải lên và để chúng tôi làm phần còn lại.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                    <div className="text-gray-600">Video đã tạo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-gray-600">Avatar AI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">99%</div>
                    <div className="text-gray-600">Độ hài lòng</div>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Upload className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">Tải Lên Tài Liệu</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-center">
                        Hỗ trợ PDF, PowerPoint, Word và nhiều định dạng khác. AI sẽ tự động phân tích nội dung
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg text-purple-900">Chọn AI Avatar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-center">
                        Lựa chọn từ thư viện avatar đa dạng với giọng nói và phong cách giảng dạy khác nhau
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg text-indigo-900">Tạo Video Tự Động</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-center">
                        AI tạo video bài giảng hoàn chỉnh với slide, lời thuyết minh và hiệu ứng chuyên nghiệp
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Step Indicator */}
            {currentStep !== 'upload' && renderStepIndicator()}

            {/* Back Button */}
            {currentStep !== 'upload' && (
              <div className="mb-6">
                <Button variant="outline" onClick={handleBackToUpload}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Quay lại đầu
                </Button>
              </div>
            )}
          </>
        )}

        {/* Step Content */}
        <div className="space-y-6">
          {currentStep === 'upload' && (
            <ContentUploader onProjectCreated={handleProjectCreated} />
          )}

          {currentStep === 'avatar' && (
            <AvatarSelector 
              project={project} 
              onProjectUpdated={handleProjectUpdated}
              onComplete={handleAvatarComplete}
            />
          )}

          {currentStep === 'generating' && (
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <div className="animate-spin w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Đang tạo video bài giảng...
                  </h3>
                  <p className="text-gray-600">
                    AI đang xử lý nội dung và tạo video chuyên nghiệp cho bạn
                  </p>
                  <div className="mt-4 text-sm text-blue-600">
                    Thời gian ước tính: 2-3 phút
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 'preview' && (
            <VideoPreview project={project} />
          )}

          {currentStep === 'projects' && (
            <div>
              <div className="mb-6">
                <Button variant="outline" onClick={handleBackFromProjects}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Quay lại
                </Button>
              </div>
              <ProjectDashboard onProjectSelected={setProject} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
