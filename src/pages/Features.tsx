
import { FileText, Mic, Video, Brain, Zap, CheckCircle, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Tính Năng Nổi Bật
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá những công nghệ tiên tiến giúp nâng cao trải nghiệm giảng dạy và học tập
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-800">Phân Tích Tài Liệu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-center leading-relaxed mb-4">
                AI tự động phân tích và trích xuất nội dung quan trọng từ tài liệu PDF, Word, PowerPoint
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Hỗ trợ nhiều định dạng file</li>
                <li>• Trích xuất văn bản thông minh</li>
                <li>• Nhận diện cấu trúc nội dung</li>
              </ul>
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
              <p className="text-slate-600 text-center leading-relaxed mb-4">
                Công nghệ text-to-speech tiên tiến với giọng nói Việt Nam tự nhiên và sinh động
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Giọng nói Việt chuẩn</li>
                <li>• Điều chỉnh tốc độ nói</li>
                <li>• Nhấn mạnh từ khóa</li>
              </ul>
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
              <p className="text-slate-600 text-center leading-relaxed mb-4">
                Tạo video bài giảng chất lượng cao với avatar 3D và hiệu ứng hình ảnh chuyên nghiệp
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Chất lượng HD/4K</li>
                <li>• Avatar 3D đa dạng</li>
                <li>• Hiệu ứng chuyển cảnh</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-slate-200 mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Tính Năng Bổ Sung</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">AI Thông Minh</h3>
                  <p className="text-slate-600">Tự động tối ưu nội dung và đề xuất cải thiện</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Xử Lý Nhanh</h3>
                  <p className="text-slate-600">Tạo video trong vài phút với công nghệ AI tiên tiến</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Chất Lượng Cao</h3>
                  <p className="text-slate-600">Đảm bảo chất lượng video và âm thanh tốt nhất</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Tiết Kiệm Thời Gian</h3>
                  <p className="text-slate-600">Giảm 90% thời gian tạo nội dung so với phương pháp truyền thống</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-blue-700 mb-2">5,000+</div>
            <div className="text-sm text-slate-600">Giảng viên tin tưởng</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-indigo-700 mb-2">200+</div>
            <div className="text-sm text-slate-600">Trường học đối tác</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-purple-700 mb-2">50,000+</div>
            <div className="text-sm text-slate-600">Video đã tạo</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-green-700 mb-2">98%</div>
            <div className="text-sm text-slate-600">Tỷ lệ hài lòng</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
