
import { Upload, User, Download, Play, FileText, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Guide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Hướng Dẫn Sử Dụng
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tạo video bài giảng chuyên nghiệp chỉ với 3 bước đơn giản
          </p>
        </div>

        {/* 3 Steps Process */}
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
            <h3 className="text-xl font-bold text-slate-800 mb-3">Tải Lên Tài Liệu</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Upload file PDF, Word, PowerPoint hoặc nhập văn bản trực tiếp vào hệ thống
            </p>
            <div className="text-sm text-slate-500">
              Hỗ trợ: PDF, DOCX, PPTX, TXT
            </div>
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
            <h3 className="text-xl font-bold text-slate-800 mb-3">Chọn Avatar</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Lựa chọn avatar 3D phù hợp để làm giảng viên cho video bài giảng của bạn
            </p>
            <div className="text-sm text-slate-500">
              Hơn 20 avatar đa dạng
            </div>
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
            <h3 className="text-xl font-bold text-slate-800 mb-3">Tải Video</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              AI tạo video hoàn chỉnh trong vài phút, sẵn sàng để chia sẻ với học sinh
            </p>
            <div className="text-sm text-slate-500">
              Định dạng: MP4, Full HD
            </div>
          </div>
        </div>

        {/* Detailed Guide */}
        <div className="space-y-8 mb-16">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <span>Chuẩn Bị Tài Liệu</span>
              </CardTitle>
              <CardDescription>
                Hướng dẫn chi tiết cách chuẩn bị tài liệu để có kết quả tốt nhất
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Định dạng được hỗ trợ:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• PDF - Tài liệu văn bản, slide</li>
                    <li>• DOCX - Microsoft Word</li>
                    <li>• PPTX - PowerPoint presentation</li>
                    <li>• TXT - Văn bản thuần túy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Lưu ý quan trọng:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Kích thước tối đa: 50MB</li>
                    <li>• Nội dung rõ ràng, có cấu trúc</li>
                    <li>• Tránh hình ảnh quá nhiều trong PDF</li>
                    <li>• Sử dụng font chữ chuẩn</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Settings className="h-5 w-5 text-purple-600" />
                </div>
                <span>Tùy Chỉnh Avatar</span>
              </CardTitle>
              <CardDescription>
                Lựa chọn và tùy chỉnh avatar phù hợp với nội dung bài giảng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Các loại avatar:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Giảng viên nam/nữ</li>
                    <li>• Phong cách chuyên nghiệp</li>
                    <li>• Trang phục phù hợp</li>
                    <li>• Biểu cảm tự nhiên</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Tùy chỉnh:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Tốc độ nói (chậm/vừa/nhanh)</li>
                    <li>• Giọng điệu (trang trọng/thân thiện)</li>
                    <li>• Vị trí avatar trên màn hình</li>
                    <li>• Background/màn hình nền</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Video có thể dài tối đa bao lâu?</h3>
              <p className="text-slate-600">Video có thể dài từ 1-60 phút tùy thuộc vào độ dài nội dung tài liệu.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Có thể chỉnh sửa video sau khi tạo không?</h3>
              <p className="text-slate-600">Có, bạn có thể chỉnh sửa nội dung, thay đổi avatar hoặc tùy chỉnh giọng nói.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Tài liệu tiếng Anh có được hỗ trợ?</h3>
              <p className="text-slate-600">Có, hệ thống hỗ trợ cả tiếng Việt và tiếng Anh với giọng nói tự nhiên.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
