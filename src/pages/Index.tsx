
import { useState } from 'react';
import { Upload, Play, Settings, BookOpen, Video, Users, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI Lecture Studio
                </h1>
                <p className="text-sm text-gray-600">Tạo video bài giảng tự động với AI</p>
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
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
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
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tạo Video Bài Giảng Chuyên Nghiệp
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Chuyển đổi PDF, slides, và văn bản thành video bài giảng sinh động với AI Avatar và giọng đọc tự nhiên
                </p>
                
                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">Phân Tích Nội Dung AI</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        Tự động phân tích và cấu trúc nội dung từ PDF, PowerPoint, hoặc văn bản thành các slide logic
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">AI Avatar Giảng Viên</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        Avatar 3D chân thực với biểu cảm tự nhiên, đồng bộ khẩu hình và cử chỉ như giáo viên thật
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                        <Video className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">Video Chuyên Nghiệp</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        Tạo video Full HD với slides, avatar, phụ đề đồng bộ và chất lượng âm thanh crystal clear
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
                  <div className="animate-spin w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Đang tạo video...
                  </h3>
                  <p className="text-gray-600">
                    Vui lòng đợi trong khi chúng tôi tạo video bài giảng cho bạn
                  </p>
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
