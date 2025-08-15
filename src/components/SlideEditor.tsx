import { useState } from 'react';
import { Edit, Save, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface SlideEditorProps {
  project: any;
  onSaveChanges: (updatedProject: any) => void;
  onContinue: () => void;
}

const SlideEditor = ({ project, onSaveChanges, onContinue }: SlideEditorProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [editedSlides, setEditedSlides] = useState(project.content.slides || []);

  const currentSlide = editedSlides[currentSlideIndex];

  const updateSlide = (field: string, value: string) => {
    const updated = editedSlides.map((slide: any, index: number) => 
      index === currentSlideIndex 
        ? { ...slide, [field]: value }
        : slide
    );
    setEditedSlides(updated);
  };

  const updateKeyPoint = (pointIndex: number, value: string) => {
    const updatedKeyPoints = [...(currentSlide.keyPoints || [])];
    updatedKeyPoints[pointIndex] = value;
    
    const updated = editedSlides.map((slide: any, index: number) => 
      index === currentSlideIndex 
        ? { ...slide, keyPoints: updatedKeyPoints }
        : slide
    );
    setEditedSlides(updated);
  };

  const addKeyPoint = () => {
    const updatedKeyPoints = [...(currentSlide.keyPoints || []), ''];
    
    const updated = editedSlides.map((slide: any, index: number) => 
      index === currentSlideIndex 
        ? { ...slide, keyPoints: updatedKeyPoints }
        : slide
    );
    setEditedSlides(updated);
  };

  const removeKeyPoint = (pointIndex: number) => {
    const updatedKeyPoints = (currentSlide.keyPoints || []).filter((_: any, index: number) => index !== pointIndex);
    
    const updated = editedSlides.map((slide: any, index: number) => 
      index === currentSlideIndex 
        ? { ...slide, keyPoints: updatedKeyPoints }
        : slide
    );
    setEditedSlides(updated);
  };

  const saveChanges = () => {
    const updatedProject = {
      ...project,
      content: {
        ...project.content,
        slides: editedSlides
      }
    };
    onSaveChanges(updatedProject);
  };

  const nextSlide = () => {
    if (currentSlideIndex < editedSlides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Edit className="h-5 w-5 text-blue-600" />
            Chỉnh sửa nội dung slide
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Bạn có thể chỉnh sửa nội dung từng slide trước khi tạo video
            </p>
            <Badge variant="outline">
              Slide {currentSlideIndex + 1} / {editedSlides.length}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Slide Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Slide trước
            </Button>
            
            <span className="text-sm text-gray-600">
              {currentSlideIndex + 1} / {editedSlides.length}
            </span>
            
            <Button
              variant="outline"
              onClick={nextSlide}
              disabled={currentSlideIndex === editedSlides.length - 1}
            >
              Slide sau
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Current Slide Editor */}
          {currentSlide && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="slide-title">Tiêu đề slide</Label>
                <Input
                  id="slide-title"
                  value={currentSlide.title || ''}
                  onChange={(e) => updateSlide('title', e.target.value)}
                  placeholder="Nhập tiêu đề slide..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slide-content">Nội dung slide</Label>
                <Textarea
                  id="slide-content"
                  value={currentSlide.content || ''}
                  onChange={(e) => updateSlide('content', e.target.value)}
                  placeholder="Nhập nội dung slide..."
                  rows={6}
                />
              </div>

              {/* Key Points Editor */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Điểm chính (tùy chọn)</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={addKeyPoint}
                  >
                    Thêm điểm
                  </Button>
                </div>
                
                {(currentSlide.keyPoints || []).map((point: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={point}
                      onChange={(e) => updateKeyPoint(index, e.target.value)}
                      placeholder={`Điểm chính ${index + 1}...`}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeKeyPoint(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Xóa
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Slide Preview */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-medium mb-3">Xem trước slide:</h4>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-center mb-4">
                {currentSlide?.title || 'Tiêu đề slide'}
              </h3>
              <p className="text-gray-700 mb-4">
                {currentSlide?.content || 'Nội dung slide...'}
              </p>
              {currentSlide?.keyPoints && currentSlide.keyPoints.length > 0 && (
                <div>
                  <h5 className="font-medium mb-2">Điểm chính:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {currentSlide.keyPoints.map((point: string, index: number) => (
                      <li key={index} className="text-gray-700">{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={saveChanges}
            >
              <Save className="h-4 w-4 mr-2" />
              Lưu thay đổi
            </Button>
            
            <Button
              onClick={onContinue}
              className="bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              Tiếp tục tạo video
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SlideEditor;