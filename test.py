import cv2
import numpy as np

# Load image
image = cv2.imread("C:/Users/ganes/Downloads/Gemini_Generated_Image_dr1qf3dr1qf3dr1q.png")

# Convert to RGBA (add alpha channel)
image_rgba = cv2.cvtColor(image, cv2.COLOR_BGR2BGRA)

# Define colors to remove (in BGR format)
# Hex: 7A0BA8 → BGR
color1 = np.array([168, 11, 122])   # (B, G, R)
# Hex: BE85D7 → BGR
color2 = np.array([215, 133, 190])

# Define tolerance (adjust if needed)
tolerance = 30

# Create masks for both colors
mask1 = cv2.inRange(image, color1 - tolerance, color1 + tolerance)
mask2 = cv2.inRange(image, color2 - tolerance, color2 + tolerance)

# Combine masks
mask = cv2.bitwise_or(mask1, mask2)

# Set alpha channel to 0 where mask is detected
image_rgba[mask != 0, 3] = 0

# Save output
cv2.imwrite("output.png", image_rgba)

print("Done! Transparent image saved as output.png")