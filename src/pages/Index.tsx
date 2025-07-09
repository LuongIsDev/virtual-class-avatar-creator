
import { useState } from 'react';
import { Upload, Play, Settings, BookOpen, Video, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentUploader from '@/components/ContentUploader';
import AvatarSelector from '@/components/AvatarSelector';
import VideoPreview from '@/components/VideoPreview';
import ProjectDashboard from '@/components/ProjectDashboard';

const Index = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [project, setProject] = useState(null);

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
        {/* Hero Section */}
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

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm border shadow-sm">
            <TabsTrigger 
              value="upload" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              <Upload className="h-4 w-4 mr-2" />
              Tải Nội Dung
            </TabsTrigger>
            <TabsTrigger 
              value="avatar"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              <Users className="h-4 w-4 mr-2" />
              Chọn Avatar
            </TabsTrigger>
            <TabsTrigger 
              value="preview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              <Play className="h-4 w-4 mr-2" />
              Xem Trước
            </TabsTrigger>
            <TabsTrigger 
              value="projects"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Dự Án
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <ContentUploader onProjectCreated={setProject} />
          </TabsContent>

          <TabsContent value="avatar" className="space-y-6">
            <AvatarSelector project={project} onProjectUpdated={setProject} />
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <VideoPreview project={project} />
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <ProjectDashboard onProjectSelected={setProject} />
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        {project && (
          <div className="fixed bottom-6 right-6 space-y-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
              onClick={() => setActiveTab('preview')}
            >
              <Play className="h-5 w-5 mr-2" />
              Tạo Video
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
