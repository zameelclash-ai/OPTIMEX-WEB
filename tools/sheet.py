import sys, glob, os
from PIL import Image, ImageDraw
suffix, out = sys.argv[1], sys.argv[2]
D='/home/claude/optimex-web/public/images/products/'
files=sorted(glob.glob(D+f'*-{suffix}.png'))
W,H=600,450; cols=3; rows=(len(files)+cols-1)//cols
sheet=Image.new('RGB',(W*cols,H*rows),(246,243,236))
for i,f in enumerate(files):
    im=Image.open(f).convert('RGBA').resize((W,H))
    bg=Image.new('RGBA',(W,H),(246,243,236,255)); bg.alpha_composite(im)
    sheet.paste(bg.convert('RGB'),((i%cols)*W,(i//cols)*H))
    ImageDraw.Draw(sheet).text(((i%cols)*W+10,(i//cols)*H+8),os.path.basename(f),fill=(0,0,0))
sheet.save(out,quality=88)
