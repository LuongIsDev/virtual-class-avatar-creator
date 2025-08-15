import { useState } from 'react';
import { FileText, Scissors, Edit, List, ChevronRight, Plus, Trash2, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

interface DocumentProcessorProps {
  project: any;
  onProcessingComplete: (processedProject: any) => void;
}

const DocumentProcessor = ({ project, onProcessingComplete }: DocumentProcessorProps) => {
  const [processingMode, setProcessingMode] = useState<'full' | 'split' | null>(null);
  const [splitMode, setSplitMode] = useState<'manual' | 'auto' | null>(null);
  const [customChapters, setCustomChapters] = useState([
    { id: 1, title: '', content: '' }
  ]);
  const [autoChapters, setAutoChapters] = useState([
    {
      id: 1,
      title: "Giới thiệu về Trí tuệ Nhân tạo",
      content: "Trí tuệ nhân tạo (AI) là khả năng của máy tính mô phỏng các quá trình tư duy của con người. AI đã trở thành một phần không thể thiếu trong cuộc sống hiện đại.",
      duration: "3-4 phút",
      selected: true
    },
    {
      id: 2,
      title: "Các loại hình Trí tuệ Nhân tạo",
      content: "AI được chia thành nhiều loại khác nhau: AI hẹp, AI tổng quát, và AI siêu việt. Mỗi loại có đặc điểm và ứng dụng riêng.",
      duration: "4-5 phút",
      selected: false
    },
    {
      id: 3,
      title: "Machine Learning và Deep Learning",
      content: "Machine Learning là nhánh của AI cho phép máy tính học từ dữ liệu. Deep Learning sử dụng mạng neural nhân tạo để giải quyết các bài toán phức tạp.",
      duration: "5-6 phút",
      selected: true
    },
    {
      id: 4,
      title: "Ứng dụng AI trong đời sống",
      content: "AI hiện diện khắp nơi: trợ lý ảo, hệ thống gợi ý, xe tự lái, chẩn đoán y tế, dịch thuật tự động và nhiều ứng dụng khác.",
      duration: "4-5 phút",
      selected: false
    },
    {
      id: 5,
      title: "Thách thức và Tương lai của AI",
      content: "AI đặt ra những thách thức về đạo đức, quyền riêng tư, và tác động đến việc làm. Cần phát triển AI có trách nhiệm.",
      duration: "3-4 phút",
      selected: true
    }
  ]);

  const addCustomChapter = () => {
    const newChapter = {
      id: customChapters.length + 1,
      title: '',
      content: ''
    };
    setCustomChapters([...customChapters, newChapter]);
  };

  const removeCustomChapter = (id: number) => {
    if (customChapters.length > 1) {
      setCustomChapters(customChapters.filter(chapter => chapter.id !== id));
    }
  };

  const updateCustomChapter = (id: number, field: 'title' | 'content', value: string) => {
    setCustomChapters(customChapters.map(chapter =>
      chapter.id === id ? { ...chapter, [field]: value } : chapter
    ));
  };

  const toggleAutoChapter = (id: number) => {
    setAutoChapters(autoChapters.map(chapter =>
      chapter.id === id ? { ...chapter, selected: !chapter.selected } : chapter
    ));
  };

  const handleFullDocumentProcess = () => {
    const processedProject = {
      ...project,
      processingMode: 'full',
      processedContent: project.content
    };
    onProcessingComplete(processedProject);
  };

  const handleSplitProcess = () => {
    let selectedContent;
    
    if (splitMode === 'manual') {
      selectedContent = customChapters.filter(ch => ch.title.trim() && ch.content.trim());
    } else {
      selectedContent = autoChapters.filter(ch => ch.selected);
    }

    const processedProject = {
      ...project,
      processingMode: 'split',
      splitMode,
      processedContent: {
        ...project.content,
        selectedChapters: selectedContent,
        totalSelectedDuration: selectedContent.length * 4 // giả định mỗi chương 4 phút
      }
    };
    onProcessingComplete(processedProject);
  };

  const selectedAutoChaptersCount = autoChapters.filter(ch => ch.selected).length;
  const validCustomChaptersCount = customChapters.filter(ch => ch.title.trim() && ch.content.trim()).length;

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-blue-600" />
            Xử lý tài liệu
          </CardTitle>
          <CardDescription>
            Chọn cách thức xử lý nội dung tài liệu để tạo video bài giảng
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Processing Mode Selection */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card 
              className={`cursor-pointer border-2 transition-all hover:shadow-md ${
                processingMode === 'full' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setProcessingMode('full')}
            >
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold">Sử dụng toàn bộ tài liệu</h3>
                  <p className="text-sm text-gray-600">
                    Tạo video từ toàn bộ nội dung đã phân tích
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer border-2 transition-all hover:shadow-md ${
                processingMode === 'split' 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 hover:border-purple-300'
              }`}
              onClick={() => setProcessingMode('split')}
            >
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto">
                    <Scissors className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold">Phân tích chia nhỏ</h3>
                  <p className="text-sm text-gray-600">
                    Chọn nội dung cụ thể để tạo video
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Full Document Processing */}
          {processingMode === 'full' && (
            <div className="space-y-4">
              <Separator />
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Thông tin video sẽ tạo:</h4>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• Số slide: {project.content.slides.length}</p>
                  <p>• Thời lượng ước tính: {project.content.estimatedViewTime}</p>
                  <p>• Ngôn ngữ: Tiếng Việt</p>
                </div>
              </div>
              <Button 
                onClick={handleFullDocumentProcess}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                <ChevronRight className="h-4 w-4 mr-2" />
                Tiếp tục với toàn bộ nội dung
              </Button>
            </div>
          )}

          {/* Split Processing Options */}
          {processingMode === 'split' && (
            <div className="space-y-4">
              <Separator />
              <div className="grid md:grid-cols-2 gap-4">
                <Card 
                  className={`cursor-pointer border transition-all ${
                    splitMode === 'manual' 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                  onClick={() => setSplitMode('manual')}
                >
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-3">
                      <Edit className="h-5 w-5 text-orange-500" />
                      <div>
                        <h4 className="font-medium">Nhập thủ công</h4>
                        <p className="text-sm text-gray-600">Tự nhập nội dung các chương</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className={`cursor-pointer border transition-all ${
                    splitMode === 'auto' 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                  onClick={() => setSplitMode('auto')}
                >
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-3">
                      <List className="h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-medium">Phân tích tự động</h4>
                        <p className="text-sm text-gray-600">Chọn từ danh sách đã phân tích</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Manual Chapter Input */}
              {splitMode === 'manual' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Nhập nội dung các chương</h4>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={addCustomChapter}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Thêm chương
                    </Button>
                  </div>
                  
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {customChapters.map((chapter, index) => (
                      <Card key={chapter.id} className="border-orange-200">
                        <CardContent className="pt-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Label className="font-medium">Chương {index + 1}</Label>
                              {customChapters.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeCustomChapter(chapter.id)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                            <Input
                              placeholder="Tiêu đề chương..."
                              value={chapter.title}
                              onChange={(e) => updateCustomChapter(chapter.id, 'title', e.target.value)}
                            />
                            <Textarea
                              placeholder="Nội dung chương..."
                              value={chapter.content}
                              onChange={(e) => updateCustomChapter(chapter.id, 'content', e.target.value)}
                              rows={3}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      Số chương hợp lệ: <span className="font-medium">{validCustomChaptersCount}</span>
                    </p>
                  </div>

                  <Button 
                    onClick={handleSplitProcess}
                    disabled={validCustomChaptersCount === 0}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Tạo video từ {validCustomChaptersCount} chương
                  </Button>
                </div>
              )}

              {/* Auto Chapter Selection */}
              {splitMode === 'auto' && (
                <div className="space-y-4">
                  <h4 className="font-medium">Chọn các chương để tạo video</h4>
                  
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {autoChapters.map((chapter) => (
                      <Card 
                        key={chapter.id} 
                        className={`border transition-all cursor-pointer ${
                          chapter.selected 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => toggleAutoChapter(chapter.id)}
                      >
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <Checkbox 
                              checked={chapter.selected}
                              onChange={() => toggleAutoChapter(chapter.id)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium">{chapter.title}</h5>
                                <span className="text-sm text-gray-500">{chapter.duration}</span>
                              </div>
                              <p className="text-sm text-gray-600">{chapter.content}</p>
                            </div>
                            {chapter.selected && (
                              <Check className="h-5 w-5 text-green-500 mt-1" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      Đã chọn: <span className="font-medium">{selectedAutoChaptersCount} chương</span>
                      {selectedAutoChaptersCount > 0 && (
                        <span className="ml-2">• Thời lượng ước tính: {selectedAutoChaptersCount * 4}-{selectedAutoChaptersCount * 5} phút</span>
                      )}
                    </p>
                  </div>

                  <Button 
                    onClick={handleSplitProcess}
                    disabled={selectedAutoChaptersCount === 0}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Tạo video từ {selectedAutoChaptersCount} chương đã chọn
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentProcessor;