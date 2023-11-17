# 导入PIL库
from PIL import Image
import os

# 获取图片目录
dir_path = './photo'
# 遍历目录下所有文件
for file_name in os.listdir(dir_path):
    # 判断是否为图片文件
    if file_name.endswith('.jpg') or file_name.endswith('.png'):
        # 打开图片
        img = Image.open(os.path.join(dir_path, file_name))

        # 翻转图片
        img_flip = img.transpose(Image.FLIP_LEFT_RIGHT)

        # 覆盖之前的图片
        os.remove(os.path.join(dir_path, file_name))
        img_flip.save(os.path.join(dir_path, file_name))

