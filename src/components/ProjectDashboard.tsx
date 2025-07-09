
import { useState } from 'react';
import { Clock, FileText, Users, Video, Trash2, Edit, Play, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

interface ProjectDashboardProps {
  onProjectSelected: (project: any) => void;
}

const ProjectDashboard = ({ onProjectSelected }: ProjectDashboardProps) => {
  const { toast } = useToast();
  
  // Mock projects data
  const [projects] = useState([
    {
      id: 1,
      title: "Lịch sử Việt Nam",
      status: "completed",
      createdAt: "2024-01-15",
      duration: 45,
      slides: 8,
      avatar: { name: "Anna", style: "professional" },
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Marketing Digital",
      status: "processing",
      createdAt: "2024-01-14",
      duration: 60,
      slides: 12,
      avatar: { name: "David", style: "friendly" },
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Toán học cơ bản",
      status: "draft",
      createdAt: "2024-01-13",
      duration: 30,
      slides: 6,
      avatar: null,
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Tiếng Anh giao tiếp",
      status: "completed",
      createdAt: "2024-01-12",
      duration: 75,
      slides: 15,
      avatar: { name: "Sarah", style: "authoritative" },
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Khoa học tự nhiên",
      status: "error",
      createdAt: "2024-01-11",
      duration: 40,
      slides: 10,
      avatar: { name: "Michael", style: "wise" },
      thumbnail: "/api/placeholder/300/200"
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Hoàn thành</Badge>;
      case 'processing':
        return <Badge className="bg-blue-100 text-blue-800">Đang xử lý</Badge>;
      case 'draft':
        return <Badge className="bg-gray-100 text-gray-800">Bản nháp</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800">Lỗi</Badge>;
      default:
        return <Badge variant="secondary">Không xác định</Badge>;
    }
  };

  const handleProjectSelect = (project: any) => {
    onProjectSelected(project);
    toast({
      title: "Đã chọn dự án",
      description: `Dự án "${project.title}" đã được tải.`,
    });
  };

  const handleDeleteProject = (projectId: number) => {
    toast({
      title: "Đã xóa dự án",
      description: "Dự án đã được xóa khỏi danh sách.",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tổng dự án</p>
                <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Video className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Hoàn thành</p>
                <p className="text-2xl font-bold text-gray-900">
                  {projects.filter(p => p.status === 'completed').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Đang xử lý</p>
                <p className="text-2xl font-bold text-gray-900">
                  {projects.filter(p => p.status === 'processing').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tổng thời lượng</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.floor(projects.reduce((sum, p) => sum + p.duration, 0) / 60)}h
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Dự án của bạn</CardTitle>
          <CardDescription>
            Quản lý và truy cập các video bài giảng đã tạo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Video className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">Preview</p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    {getStatusBadge(project.status)}
                  </div>

                  {/* Menu */}
                  <div className="absolute top-3 right-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur-sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleProjectSelect(project)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Chỉnh sửa
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Play className="h-4 w-4 mr-2" />
                          Xem video
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="text-red-600"
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Xóa
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 truncate">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Tạo ngày {formatDate(project.createdAt)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{project.slides} slides</span>
                      <span>{project.duration} phút</span>
                    </div>

                    {project.avatar && (
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                          <Users className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">
                          {project.avatar.name}
                        </span>
                      </div>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => handleProjectSelect(project)}
                    >
                      Mở dự án
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDashboard;
