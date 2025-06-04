import json
import numpy as np
from PIL import Image
import tensorflow as tf
import gradio as gr

# Load the trained model and class indices
model_path = 'plant_disease_prediction_model.h5'
class_indices_path = 'class_indices.json'

model = tf.keras.models.load_model(model_path)
class_indices = json.load(open(class_indices_path))

# Function to preprocess image
def preprocess_image(img, target_size=(224, 224)):
    img = img.resize(target_size)
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array.astype('float32') / 255.
    return img_array

# Function to make prediction
def predict(image):
    img = preprocess_image(image)
    predictions = model.predict(img)
    predicted_index = np.argmax(predictions, axis=1)[0]
    predicted_class = class_indices[str(predicted_index)]
    return f"Prediction: {predicted_class}"

# Gradio Interface

interface = gr.Interface(
    fn=predict,
    inputs=gr.Image(type="pil", label="Upload Leaf Image"),
    outputs=gr.Textbox(label="Disease Prediction"),
    title="Plant Disease Classifier",
    description="Upload a plant leaf image to predict the disease class."
)

interface.launch()
