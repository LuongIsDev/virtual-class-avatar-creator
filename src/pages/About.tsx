
import { GraduationCap, Users, School, Award, CheckCircle, Clock, Brain, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Về EduAI Studio
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nền tảng giáo dục thông minh tiên phong tại Việt Nam, chuyên ứng dụng công nghệ AI để nâng cao chất lượng giảng dạy và học tập
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Sứ Mệnh</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Chúng tôi tin rằng công nghệ AI có thể thay đổi cách chúng ta học tập và giảng dạy. 
              Sứ mệnh của chúng tôi là làm cho việc tạo nội dung giáo dục chất lượng cao trở nên 
              dễ dàng và tiếp cận được với mọi người.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Với EduAI Studio, các giảng viên và nhà giáo dục có thể tập trung vào việc 
              truyền đạt kiến thức thay vì lo lắng về kỹ thuật sản xuất video.
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
              <h3 className="font-semibold text-slate-800 mb-2">Chất lượng cao</h3>
              <p className="text-sm text-slate-600">Video HD với hiệu ứng chuyên nghiệp</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
              <Clock className="h-8 w-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Tiết kiệm thời gian</h3>
              <p className="text-sm text-slate-600">Tạo video trong vài phút</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <Brain className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">AI thông minh</h3>
              <p className="text-sm text-slate-600">Công nghệ AI tiên tiến nhất</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100">
              <Star className="h-8 w-8 text-pink-600 mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Dễ sử dụng</h3>
              <p className="text-sm text-slate-600">Giao diện thân thiện và trực quan</p>
            </div>
          </div>
        </div>

        {/* Team & Values */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-slate-200 mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Giá Trị Cốt Lõi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Giáo Dục Là Ưu Tiên</h3>
              <p className="text-slate-600">
                Chúng tôi đặt chất lượng giáo dục lên hàng đầu, không ngừng cải thiện để phục vụ tốt nhất cho cộng đồng giáo dục.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Cộng Đồng</h3>
              <p className="text-slate-600">
                Xây dựng cộng đồng giáo dục mạnh mẽ, nơi mọi người có thể học hỏi và chia sẻ kiến thức với nhau.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Đổi Mới</h3>
              <p className="text-slate-600">
                Luôn tiên phong trong việc ứng dụng công nghệ mới nhất để mang lại trải nghiệm học tập tốt nhất.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <School className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-800 mb-2">200+</div>
              <p className="text-slate-600">Trường học</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-800 mb-2">5,000+</div>
              <p className="text-slate-600">Giảng viên</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-800 mb-2">100,000+</div>
              <p className="text-slate-600">Học sinh</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-800 mb-2">10+</div>
              <p className="text-slate-600">Giải thưởng</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-xl mb-8 text-blue-100">
            Sẵn sàng hỗ trợ bạn trong hành trình số hóa giáo dục
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-100">contact@eduai.studio</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Hotline</h3>
              <p className="text-blue-100">1900-EDUAI (33824)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Địa chỉ</h3>
              <p className="text-blue-100">Hà Nội & TP. Hồ Chí Minh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
