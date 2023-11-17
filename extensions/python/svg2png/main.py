from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM

# 从SVG文件中读取图像
drawing = svg2rlg('path/to/file.svg')

# 将图像渲染为PNG并保存
renderPM.drawToFile(drawing, 'path/to/output.png', fmt='PNG')