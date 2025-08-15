import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ChapterRangeInputProps {
  onRangeSubmit: (fromChapter: number, toChapter: number) => void;
}

const ChapterRangeInput = ({ onRangeSubmit }: ChapterRangeInputProps) => {
  const [fromChapter, setFromChapter] = useState<number>(1);
  const [toChapter, setToChapter] = useState<number>(4);

  const handleSubmit = () => {
    if (fromChapter > 0 && toChapter >= fromChapter) {
      onRangeSubmit(fromChapter, toChapter);
    }
  };

  return (
    <Card className="border-orange-200 bg-orange-50">
      <CardContent className="pt-4">
        <div className="space-y-4">
          <h4 className="font-medium">Nhập khoảng chương cần tạo video</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from-chapter">Từ chương</Label>
              <Input
                id="from-chapter"
                type="number"
                min="1"
                value={fromChapter}
                onChange={(e) => setFromChapter(parseInt(e.target.value) || 1)}
                placeholder="1"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="to-chapter">Đến chương</Label>
              <Input
                id="to-chapter"
                type="number"
                min={fromChapter}
                value={toChapter}
                onChange={(e) => setToChapter(parseInt(e.target.value) || fromChapter)}
                placeholder="4"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-3">
            <p className="text-sm text-gray-700">
              Sẽ tạo video từ <span className="font-medium">chương {fromChapter}</span> đến <span className="font-medium">chương {toChapter}</span>
              <span className="ml-2">({toChapter - fromChapter + 1} chương)</span>
            </p>
          </div>

          <Button 
            onClick={handleSubmit}
            disabled={fromChapter <= 0 || toChapter < fromChapter}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500"
          >
            <ChevronRight className="h-4 w-4 mr-2" />
            Tạo video từ {toChapter - fromChapter + 1} chương
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterRangeInput;