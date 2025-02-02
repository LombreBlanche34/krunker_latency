import time
import keyboard
import mouse

def on_key_event(event):
    if event.name == "r":
        print(f"Key 'R' pressed! Timestamp: {int(time.time() * 1000)}")

def on_click_event():
    print(f"Left click detected! Timestamp: {int(time.time() * 1000)}")

# Listen for keyboard and mouse events
keyboard.on_press(on_key_event)
mouse.on_click(on_click_event)

print("The detection has started. Press R (or the key to switch to the knife) or left-click your mouse to shoot.")

# Infinite loop to keep the script running
keyboard.wait()
