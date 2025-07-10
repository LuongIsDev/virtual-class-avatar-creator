
import { useState } from 'react';
import { Upload, Play, Settings, BookOpen, Video, Users, Sparkles, ArrowLeft, ArrowRight, GraduationCap, Brain, Zap, CheckCircle, Clock, Star, User, LogIn, Menu, X, FileText, Mic, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ContentUploader from '@/components/ContentUploader';
import AvatarSelector from '@/components/AvatarSelector';
import VideoPreview from '@/components/VideoPreview';
import ProjectDashboard from '@/components/ProjectDashboard';

const Index = () => {
  const [currentStep, setCurrentStep] = useState('upload'); // 'upload', 'avatar', 'generating', 'preview', 'projects'
  const [project, setProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* Enhanced Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  EduAI Studio
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Trang chủ</a>
              <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Tính năng</a>
              <a href="#guide" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Hướng dẫn</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Giới thiệu</a>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleViewProjects}
                className="border-slate-300 hover:border-blue-400"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Dự Án
              </Button>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-600">
                <LogIn className="h-4 w-4 mr-2" />
                Đăng nhập
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                <User className="h-4 w-4 mr-2" />
                Đăng ký
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Trang chủ</a>
                <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium">Tính năng</a>
                <a href="#guide" className="text-slate-600 hover:text-blue-600 font-medium">Hướng dẫn</a>
                <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium">Giới thiệu</a>
                <div className="flex flex-col space-y-2 pt-2 border-t border-slate-200">
                  <Button variant="outline" size="sm" onClick={handleViewProjects}>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Dự Án
                  </Button>
                  <Button variant="ghost" size="sm">
                    <LogIn className="h-4 w-4 mr-2" />
                    Đăng nhập
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                    <User className="h-4 w-4 mr-2" />
                    Đăng ký
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {currentStep !== 'projects' && (
          <>
            {/* Hero Section - Only show on upload step */}
            {currentStep === 'upload' && (
              <>
                <div className="text-center mb-16">
                  <div className="mb-12">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold mb-6 border border-blue-200">
                      <Brain className="h-4 w-4 mr-2" />
                      Nền tảng giáo dục thông minh hàng đầu Việt Nam
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-tight">
                      Tạo Bài Giảng Tương Tác
                      <br />
                      <span className="text-3xl md:text-4xl">Với Trí Tuệ Nhân Tạo</span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                      Chuyển đổi tài liệu học tập thành video bài giảng sinh động và chuyên nghiệp. 
                      Được tin tưởng bởi hàng nghìn giảng viên và sinh viên trên toàn quốc.
                    </p>
                  </div>
                </div>

                {/* Features Section */}
                <section id="features" className="mb-20">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">Tính Năng Nổi Bật</h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                      Khám phá những công nghệ tiên tiến giúp nâng cao trải nghiệm giảng dạy và học tập
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <FileText className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-800">Phân Tích Tài Liệu</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 text-center leading-relaxed">
                          AI tự động phân tích và trích xuất nội dung quan trọng từ tài liệu PDF, Word, PowerPoint
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Mic className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-800">Giọng Nói Tự Nhiên</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 text-center leading-relaxed">
                          Công nghệ text-to-speech tiên tiến với giọng nói Việt Nam tự nhiên và sinh động
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Video className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-800">Video Chuyên Nghiệp</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 text-center leading-relaxed">
                          Tạo video bài giảng chất lượng cao với avatar 3D và hiệu ứng hình ảnh chuyên nghiệp
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* How It Works Section */}
                <section id="guide" className="mb-20">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">Cách Thức Hoạt Động</h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                      Chỉ với 3 bước đơn giản, bạn đã có thể tạo ra video bài giảng chuyên nghiệp
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                          <Upload className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          1
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Tải Lên Tài Liệu</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Upload file PDF, Word, PowerPoint hoặc nhập văn bản trực tiếp vào hệ thống
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                          <User className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          2
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Chọn Avatar</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Lựa chọn avatar 3D phù hợp để làm giảng viên cho video bài giảng của bạn
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                          <Download className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          3
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-3">Tải Video</h4>
                      <p className="text-slate-600 leading-relaxed">
                        AI tạo video hoàn chỉnh trong vài phút, sẵn sàng để chia sẻ với học sinh
                      </p>
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="mb-16">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-slate-200">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-6">Về EduAI Studio</h3>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                          Chúng tôi là nền tảng giáo dục thông minh tiên phong tại Việt Nam, chuyên ứng dụng 
                          công nghệ AI để nâng cao chất lượng giảng dạy và học tập.
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                          Với sứ mệnh số hóa giáo dục, chúng tôi giúp các giảng viên và nhà giáo dục 
                          tạo ra những nội dung học tập hấp dẫn và hiệu quả một cách dễ dàng nhất.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-700 mb-2">5,000+</div>
                            <div className="text-sm text-slate-600">Giảng viên tin tưởng</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-700 mb-2">200+</div>
                            <div className="text-sm text-slate-600">Trường học đối tác</div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                          <CheckCircle className="h-8 w-8 text-blue-600 mb-3" />
                          <h4 className="font-semibold text-slate-800 mb-2">Chất lượng cao</h4>
                          <p className="text-sm text-slate-600">Video HD với hiệu ứng chuyên nghiệp</p>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                          <Clock className="h-8 w-8 text-indigo-600 mb-3" />
                          <h4 className="font-semibold text-slate-800 mb-2">Tiết kiệm thời gian</h4>
                          <p className="text-sm text-slate-600">Tạo video trong vài phút</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                          <Brain className="h-8 w-8 text-purple-600 mb-3" />
                          <h4 className="font-semibold text-slate-800 mb-2">AI thông minh</h4>
                          <p className="text-sm text-slate-600">Công nghệ AI tiên tiến nhất</p>
                        </div>
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100">
                          <Star className="h-8 w-8 text-pink-600 mb-3" />
                          <h4 className="font-semibold text-slate-800 mb-2">Dễ sử dụng</h4>
                          <p className="text-sm text-slate-600">Giao diện thân thiện và trực quan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
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

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">EduAI Studio</span>
              </div>
              <p className="text-slate-400 mb-4">
                Nền tảng giáo dục thông minh hàng đầu Việt Nam
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                  <span className="text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                  <span className="text-xs font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                  <span className="text-xs font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Tạo video AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Avatar 3D</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Text-to-Speech</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Phân tích tài liệu</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn sử dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Báo lỗi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Công ty</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tin tức</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Điều khoản</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 EduAI Studio. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
