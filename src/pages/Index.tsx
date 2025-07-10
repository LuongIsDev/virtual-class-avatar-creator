
import { useState } from 'react';
import { Upload, Play, Settings, BookOpen, Video, Users, Sparkles, ArrowLeft, ArrowRight, GraduationCap, Brain, Zap, CheckCircle, Clock, Star } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  EduAI Studio
                </h1>
                <p className="text-sm text-slate-600 font-medium">Nền tảng giáo dục thông minh</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-slate-300 hover:border-blue-400">
                <Settings className="h-4 w-4 mr-2" />
                Cài đặt
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleViewProjects}
                className="border-slate-300 hover:border-blue-400"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Dự Án
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
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
              <div className="text-center mb-16">
                <div className="mb-12">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold mb-6 border border-blue-200">
                    <Brain className="h-4 w-4 mr-2" />
                    Công nghệ AI tiên tiến trong giáo dục
                  </div>
                  <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-tight">
                    Tạo Bài Giảng Tương Tác
                    <br />
                    <span className="text-4xl">Với Trí Tuệ Nhân Tạo</span>
                  </h2>
                  <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                    Chuyển đổi tài liệu học tập thành video bài giảng sinh động và chuyên nghiệp. 
                    Được tin tưởng bởi hàng nghìn giảng viên và sinh viên trên toàn quốc.
                  </p>
                </div>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Dễ sử dụng</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Giao diện trực quan, chỉ cần vài click để tạo ra bài giảng chuyên nghiệp
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Tiết kiệm thời gian</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tự động tạo nội dung và video trong vài phút thay vì hàng giờ
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Chất lượng cao</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Video HD với giọng nói tự nhiên và hiệu ứng chuyên nghiệp
                    </p>
                  </div>
                </div>

                {/* Trusted by section */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 mb-12">
                  <p className="text-slate-600 font-semibold mb-6">Được tin tưởng bởi các trường hàng đầu</p>
                  <div className="grid md:grid-cols-4 gap-8 items-center opacity-60">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700 mb-1">5,000+</div>
                      <div className="text-sm text-slate-600">Giảng viên</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-700 mb-1">50,000+</div>
                      <div className="text-sm text-slate-600">Sinh viên</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-700 mb-1">200+</div>
                      <div className="text-sm text-slate-600">Trường học</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-700 mb-1">98%</div>
                      <div className="text-sm text-slate-600">Hài lòng</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Back Button */}
            {currentStep !== 'upload' && (
              <div className="mb-6">
                <Button variant="outline" onClick={handleBackToUpload} className="border-slate-300 hover:border-blue-400">
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
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="pt-8">
                <div className="text-center py-16">
                  <div className="relative mb-8">
                    <div className="animate-spin w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-indigo-400 rounded-full mx-auto animate-spin" style={{animationDelay: '0.5s', animationDuration: '1.5s'}}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Đang tạo video bài giảng...
                  </h3>
                  <p className="text-slate-600 text-lg mb-6">
                    AI đang xử lý nội dung và tạo video chuyên nghiệp cho bạn
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 inline-block">
                    <p className="text-blue-700 font-semibold">Thời gian ước tính: 2-3 phút</p>
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
                <Button variant="outline" onClick={handleBackFromProjects} className="border-slate-300 hover:border-blue-400">
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
