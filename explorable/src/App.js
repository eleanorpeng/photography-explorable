import React, { useState } from "react";
import "./App.css";
import ImageISOAdjuster from "./iso";
import ReactFlipCard from "reactjs-flip-card";
import MultipleChoice from "./MultipleChoice";
import Shutter from "./shutter";
import Aperture from "./aperture";
import Analogy from "./Analogy";

function App() {
  const [lensImage, setLensImage] = useState("2.0.png");
  const [fstop, setFstop] = useState("f/2.0");
  const [curAnalogy, setCurAnalogy] = useState(-1);
  const [analogyImg, setAnalogyImg] = useState(null);

  const styles = {
    card: { background: "#e9edc9", color: "black", borderRadius: 16 },
  };
  const analogyImages = [
    "Aperture_Fixed.png",
    "Shutter_Fixed.png",
    "ISO_Fixed.png",
  ];
  const handleClick = (fstop) => {
    setFstop(`f/${fstop}`);
    setLensImage(`${fstop}.png`);
  };

  const handleSelected = (id) => {
    setCurAnalogy(id);
    setAnalogyImg(analogyImages[id]);
  };
  const scenario1choices = [
    {
      id: 0,
      options: ["ISO 1600", "1/30s", "f/11"],
      rationale:
        "Not quite :( Think about what aperture we need in order to achieve a shallower depth of field. Consider it’s a bright sunny day, a higher ISO and slower shutter speed might allow too much light to enter the sensor, causing overexposure.",
    },
    {
      id: 1,
      options: ["ISO 100", "1/2000s", "f/1.8"],
      rationale:
        "That's correct! To achieve a bokeh effect, we need a wider aperture (or a smaller f-stop) to achieve a shallower depth of field. Since it’s a bright sunny day, we can use lower ISO and shutter speed to prevent overexposure.",
    },
    {
      id: 2,
      options: ["ISO 100", "1/125s", "f/5.6"],
      rationale:
        "Almost! The low ISO is useful under a bright sunny day, but we might not be able to create bokeh effect with f/5.6. What aperture do we need to create shallow depth of field? What’s the relationship between shutter speed and light?",
    },
  ];

  const scenario2choices = [
    {
      id: 0,
      options: ["ISO 100", "1/1000s", "f/8"],
      rationale:
        "Correct! Fast shutter speed allows you to capture sharp images when children are active during sports day. The low ISO takes advantages of the bright conditions, while f/8 offers sufficient depth of field for multiple children to be in focus.",
    },
    {
      id: 1,
      options: ["ISO 200", "1/60s", "f/11"],
      rationale:
        "Not quite :( While the ISO and aperture seems fine, the shutter speed is the main issue in this case. Since the goal is to capture kids’ actions sharply, a shutter speed of 1/60s will result in motion blur since it has slow shutter speed.",
    },
    {
      id: 2,
      options: ["ISO 100", "1/300s", "f/2.8"],
      rationale:
        "Not quite :( A wide aperture results in shallow depth of field, which is not ideal if the goal is to capture all the kids running on the field. The shutter speed could also be faster to ensure there’s no motion blur in the image.",
    },
  ];

  const scenario3choices = [
    {
      id: 0,
      options: ["ISO 800", "1/30s", "f/4"],
      rationale:
        "Almost! Slower shutter speed allows you capture blurred motion while allowing more lights to enter the lens at night. However, the photo might still be underexposed with the wide aperture. There’s a better choice!",
    },
    {
      id: 1,
      options: ["ISO 3200", "1/125s", "f/8"],
      rationale:
        "Not quite :( While the high ISO and narrow aperture allows more light to enter the sensor, this shutter speed is too fast and will not be able to capture the motion blur effect that we’re aiming for. ",
    },
    {
      id: 2,
      options: ["ISO 1600", "1/15s", "f/5.6"],
      rationale:
        "Perfect! The shutter speed of 1/15s is slow enough to capture the motion of the biker, creating a sense of movement through motion blur. Since the shutter is slow, we might have to rely on some stabler to ensure the image is crisp. The ISO and aperture provide a good balance to the sensitivity of light without introducing too much noise.",
    },
  ];

  const analogies = [
    {
      id: 0,
      description: "Aperture",
      subDescription: "Teapot Opening",
      img: "teapot.png",
    },
    {
      id: 1,
      description: "Shutter Speed",
      subDescription: "Pouring Speed",
      img: "timer.png",
    },
    {
      id: 2,
      description: "ISO",
      subDescription: "Tea Leaves",
      img: "tea.png",
    },
  ];

  return (
    <div className="App">
      <div className="content">
        <h1>Understanding Exposure Triangle</h1>
        <p>by Eleanor Peng</p>
        <p>
          How to capture a photo under the perfect condition? For a photography
          beginner, it’s challenging to understand all the manual settings. In
          this explorable, I’ll explain what exposure triangle is, how they
          work, and provide some practices for capturing the best photo under
          different conditions.
        </p>
        <div className="exposure-triangle">
          <h2>What is Exposure Triangle?</h2>
          <p>
            Exposure triangle consists of ISO, shutter speed, and aperture. The
            combination of these three camera controls determines the light and
            effects of an image. ISO controls the sensitivity of light, shutter
            speed controls the blurriness of motion, and aperture controls the
            depth of field of an image. They work together to ensure an image is
            properly exposed. Adjusting one variable would affect the others, so
            it’s critical to understand how to change the variables to maintain
            proper exposure.
          </p>
          <img style={{ alignSelf: "center", width: 500 }} src="triangle.png" />
        </div>
        <div>
          <h2>ISO</h2>
          <p>
            ISO controls how sensitive the camera is to light. You can think of
            it as a lightbulb. Lower ISO has dimmer light, while higher ISO has
            brighter light.
          </p>
          <p>Let's look at the photos below (hover over images):</p>
          <div className="cards">
            <div className="card">
              <ReactFlipCard
                containerStyle={{ width: 300, height: 400 }}
                frontStyle={styles.card}
                backStyle={{
                  ...styles.card,

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                frontComponent={
                  <div>
                    <img
                      src="ISO_400.png"
                      style={{
                        width: 300,
                        height: 400,
                        objectFit: "cover",
                        borderRadius: 16,
                      }}
                    />
                  </div>
                }
                backComponent={
                  <div>
                    <p>Less sensitivity and great for bright conditions</p>
                  </div>
                }
              />
              <p>ISO 400</p>
            </div>
            <div className="card">
              <ReactFlipCard
                containerStyle={{ width: 300, height: 400 }}
                frontStyle={styles.card}
                backStyle={{
                  ...styles.card,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                frontComponent={
                  <div>
                    <img
                      src="ISO_1600.png"
                      style={{
                        width: 300,
                        height: 400,
                        objectFit: "cover",
                        borderRadius: 16,
                      }}
                    />
                  </div>
                }
                backComponent={
                  <div style={{ padding: 20 }}>
                    <p>
                      Higher sensitivity and suitable for low light conditions
                    </p>
                  </div>
                }
              />
              <p>ISO 1600</p>
            </div>
          </div>

          <p>
            The image with higher ISO contains more noise (aka has more grains),
            because more photons enter the photo in that case. In other words,
            higher ISO increases the noise of the photo. Whenever we adjust ISO
            in digital camera, we’re increasing or decreasing the camera’s
            sensitivity by manipulating the voltage to the sensor.
          </p>
          <p>There are 3 types of ISO:</p>
          <ol>
            <li>
              <b>Native</b>: Doesn’t require camera to increase voltage to the
              sensor
            </li>
            <li>
              <b>Amplified</b>: Requires camera to increase voltage to the
              sensor, causing noises to enter the image
            </li>
            <li>
              <b>Simulated</b>: This is when camera uses software to simulate
              ISO
            </li>
          </ol>
          <p>
            Regardless of the type of ISO, they all adhere to the same effects.
          </p>
          <p style={{ fontSize: 16, textAlign: "center" }}>
            Adjust the slider below to see how ISO affects an image
          </p>
          <div>
            <ImageISOAdjuster src="ferriswheel.jpeg" />
          </div>
        </div>
        <div>
          <h2>Shutter Speed</h2>
          <p>
            Shutter speed controls amount of light that enters the camera,
            determining the length of time light enters camera’s sensor. You can
            think of it as our eyes blinking, where quick blink simulates fast
            shutter speed and slow blink simulates slower shutter speed.
          </p>
          <p>Let's look at the photos below:</p>
          <div className="cards">
            <div className="card">
              <ReactFlipCard
                containerStyle={{ width: 300, height: 400 }}
                frontStyle={styles.card}
                backStyle={{
                  ...styles.card,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                frontComponent={
                  <div>
                    <img
                      src="5s.jpeg"
                      style={{
                        width: 300,
                        height: 400,
                        objectFit: "cover",
                        borderRadius: 16,
                      }}
                    />
                  </div>
                }
                backComponent={
                  <div style={{ padding: 20 }}>
                    <p>
                      Slower shutter speed increases brightness and creates
                      motion blur effect
                    </p>
                  </div>
                }
              />
              <p>Shutter speed 5s</p>
            </div>
            <div className="card">
              <ReactFlipCard
                containerStyle={{ width: 300, height: 400 }}
                frontStyle={styles.card}
                backStyle={{
                  ...styles.card,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                frontComponent={
                  <div>
                    <img
                      src="5000s.jpg"
                      style={{
                        width: 300,
                        height: 400,
                        objectFit: "cover",
                        borderRadius: 16,
                      }}
                    />
                  </div>
                }
                backComponent={
                  <div style={{ padding: 20 }}>
                    <p>
                      Faster shutter speed decreases brightness and capture
                      freeze motion
                    </p>
                  </div>
                }
              />
              <p>Shutter speed 1/5000s</p>
            </div>
          </div>
          <p>
            Under the same ISO and aperture, slower shutter speed results in
            brighter conditions with blurrier motion. This is because more light
            enters when the shutter is opened for longer period, and any
            movement is being captured as motion blur during that time. Due to
            this, people usually use some stablalizers like tripods when taking
            photo using a slower shutter speed, as it's difficult to hold the
            camera steady for long period of time. On the other hand, faster
            shutter speed results in dimmer condition with freeze motion. This
            is a great variable to play around with to generate special effect
            on an image!
          </p>
          <p style={{ fontSize: 16, textAlign: "center" }}>
            Adjust the slider below to see how shutter speed affects an image
          </p>
          <Shutter />
        </div>
        <div>
          <h2>Aperture</h2>
          <p>
            Aperture controls the amount of light passing through lens by
            changing the size of lens opening. People typically refer to
            f-stops–the ratio of the opening of a lens aperture compared to the
            focal length of the lens–when talking about aperture.
          </p>
          <p style={{ textAlign: "center" }}>
            f-stop = focal length / diameter
          </p>
          <p>
            Imagine you’re in a room with one window. Aperture is like the size
            of the window. A larger window lets in more light to make the room
            brighter, while a smaller window lets in less light.
          </p>
          <p style={{ fontSize: 16, textAlign: "center" }}>
            Click on the buttons below to see how f-stop affects the size of
            lens
          </p>
          <div className="lens">
            <div className="lens-inner">
              <img src={lensImage} />
              <p>{fstop}</p>
            </div>

            <div className="aperture-buttons">
              <button onClick={() => handleClick("2.0")}>f/2.0</button>
              <button onClick={() => handleClick("2.8")}>f/2.8</button>
              <button onClick={() => handleClick("4")}>f/4</button>
              <button onClick={() => handleClick("5.6")}>f/5.6</button>
              <button onClick={() => handleClick("8")}>f/8</button>
              <button onClick={() => handleClick("11")}>f/11</button>
              <button onClick={() => handleClick("16")}>f/16</button>
              <button onClick={() => handleClick("22")}>f/22</button>
            </div>
          </div>
          <p>Let's look at photos below:</p>
          <div className="cards">
            <div className="card">
              <ReactFlipCard
                containerStyle={{ width: 300, height: 400 }}
                frontStyle={styles.card}
                backStyle={{
                  ...styles.card,

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                frontComponent={
                  <div>
                    <img
                      src="f2.jpg"
                      style={{
                        width: 300,
                        height: 400,
                        objectFit: "cover",
                        borderRadius: 16,
                      }}
                    />
                  </div>
                }
                backComponent={
                  <div style={{ padding: 20 }}>
                    <p>
                      Wider aperture (smaller f-stop) results in shallower depth
                      of field, creating bokeh effect on an image
                    </p>
                  </div>
                }
              />
              <p>f/2</p>
            </div>
            <div className="card">
              <ReactFlipCard
                containerStyle={{ width: 300, height: 400 }}
                frontStyle={styles.card}
                backStyle={{
                  ...styles.card,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                frontComponent={
                  <div>
                    <img
                      src="f16.jpeg"
                      style={{
                        width: 300,
                        height: 400,
                        objectFit: "cover",
                        borderRadius: 16,
                      }}
                    />
                  </div>
                }
                backComponent={
                  <div style={{ padding: 20 }}>
                    <p>
                      Narrower aperture (larger f-stop) results extends depth of
                      field, allowing more scene to be in focus
                    </p>
                  </div>
                }
              />
              <p>f/16</p>
            </div>
          </div>
          <p>
            In addition to light, aperture affects depth of field, the extent to
            which the objects in an image appears sharp and in focus. From the
            photos shown above, wider aperture results in shallower depth of
            field, blurring the background and making a scene to be in focus. On
            the other hand, narrower aperture extends depth of field, making
            more of the scene appears in focus.
          </p>
          <p style={{ fontSize: 16, textAlign: "center" }}>
            Adjust the slider below to see how aperture affects an image
          </p>
          <Aperture src="ferriswheel.jpeg" />
        </div>
        <div>
          <h2>Putting It All Together</h2>
          <p>
            Now that we’ve understand how each variable affects the exposure and
            what side effect they create, let’s put everything together. Instead
            of photography, let’s understand it with an analogy of brewing a
            perfect cup of tea. Our objective of photography is to capture an
            image with the right exposure, similar to how we want to brew a cup
            of tea with the taste we enjoy. In this case, let’s consider
            aperture as the size of the teapot’s opening, shutter speed as
            pouring time, and ISO as the amount of tea leaves required.
          </p>
          <ul>
            <li>
              <b>Aperture</b> = <b>teapot's opening</b>
              <ul>
                <li>
                  Wide aperture (small f-stop) = larger teapot opening. Larger
                  teapot opening means more water pours out, similar to how
                  wider aperture allow more light to enter the camera
                </li>
                <li>
                  Narrow aperture (large f-stop) = small teapot opening. Small
                  teapot opening indicates less water is poured out, similar to
                  how narrow aperture allows less light to pass through the lens
                </li>
              </ul>
            </li>
            <li>
              <b>Shutter speed</b> = <b>pouring time</b>
              <ul>
                <li>
                  Faster shutter speed = shorter pouring time. When brewing tea,
                  pouring quickly means the water has less time to extract the
                  flavor of the tea. This is similar to how faster shutter speed
                  captures freeze motion and allow less light to enter
                </li>
                <li>
                  Slower shutter speed = longer pouring time. Pouring slowly
                  means water has more time to extract the flavor of the tea.
                  Similarly, slower shutter speed allows more light to enter and
                  captures blurring motion during the timeframe the shutter is
                  opened
                </li>
              </ul>
            </li>
            <li>
              <b>ISO</b> = <b>amount of tea leaves</b>
              <ul>
                <li>
                  Higher ISO = more tea leaves. Assuming amount of water and
                  pouring speed is fixed, more tea leaves make the flavor of the
                  tea stronger. Similarly, higher ISO makes the camera more
                  sensitive to light
                </li>
                <li>
                  Lower ISO = less tea leaves. Assuming other conditions are
                  equal, less tea leaves results in a more subtle tea aroma.
                  This is analogous to how lower ISO makes the camera less
                  sensitive to light, creating less noise on the photo
                </li>
              </ul>
            </li>
          </ul>
          <p style={{ textAlign: "center" }}>
            Click on one button to fix that variable and observe how we need to
            adjust the other two to brew the perfect cup of tea.
          </p>
          <div className="analogy-container">
            <div className="analogy-buttons">
              {analogies.map((analogy) => {
                return (
                  <Analogy
                    id={analogy.id}
                    img={analogy.img}
                    description={analogy.description}
                    subDescription={analogy.subDescription}
                    handleSelected={handleSelected}
                    background={
                      parseInt(curAnalogy) === analogy.id
                        ? "#ccd5ae"
                        : "#e9edc9"
                    }
                  />
                );
              })}
            </div>
            <img src={analogyImg}></img>
          </div>
        </div>
        <div>
          <h1>Let's Try It Out!</h1>
          <p>
            The best way to apply your knowledge about exposure triangle is to
            actually put them into practice. Given each scenario below,
            <i> choose the best combinations </i>
            of ISO, shutter speed, and aperture to capture the image we want.
          </p>
          <div>
            <MultipleChoice
              scenario="1"
              description="You’re walking on the beach with your friends and saw a brush on the sand under a bright sunny day. How would you take a photo that creates a bokeh effect and only focus on the brush on the sand?"
              choices={scenario1choices}
              ans="1"
              img="brush.jpg"
            />
            <MultipleChoice
              scenario="2"
              description="You’re hired to capture photos of kids during sports day! What should you set your settings to to demonstrate the energy of the children under a sunny day? Your client wants to see the kids’ actions sharply."
              choices={scenario2choices}
              ans="0"
              img="sports.jpeg"
            />
            <MultipleChoice
              scenario="3"
              description="You were walking on the street at night and saw someone riding a really cool bike on the street. Excitedly, you take out your camera and want to capture the motion of the biker and share it with your friends. What should you set your settings to?"
              choices={scenario3choices}
              ans="2"
              img="bike.jpg"
            />
          </div>
        </div>
        <div>
          <h1>What's Next?</h1>
          <p>
            Thank you for reading until this point! I hope this explorable helps
            you understand the exposure triangle better and allows you to know
            what settings to use under various conditions. Once you get
            comfortable with these settings, it’s time to get creative and play
            around with different settings to achieve special effects you like!
            As a recap, ISO controls sensitivity of light, shutter speed
            determines blurriness of motion, and aperture determines depth of
            field of an image.
          </p>
          <p>
            If you’d like to learn more about these, I’d recommend checking
            these resources:
          </p>
          <p>
            <b>Content</b>
          </p>
          <ul>
            <li>
              <a href="https://ciechanow.ski/cameras-and-lenses/">
                Camera & Lenses
              </a>
            </li>
            <li>
              <a href="https://electronics.howstuffworks.com/camera.html">
                How Cameras Work
              </a>
            </li>
            <li>
              <a href="https://www.bhphotovideo.com/explora/photography/tips-and-solutions/understanding-exposure-part-1-the-exposure-triangle">
                Understanding Exposure, Part 1: The Exposure Triangle
              </a>
            </li>
            <li>
              <a href="https://www.bhphotovideo.com/explora/photography/tips-and-solutions/understanding-exposure-part-2-aperture">
                Understanding Exposure, Part 2: Aperture
              </a>
            </li>
            <li>
              <a href="https://www.bhphotovideo.com/explora/photography/tips-and-solutions/understanding-exposure-part-3-shutter-speed">
                Understanding Exposure, Part 3: Shutter Speed
              </a>
            </li>
            <li>
              <a href="https://www.bhphotovideo.com/explora/photography/tips-and-solutions/understanding-exposure-part-4-iso">
                Understanding Exposure, Part 4: ISO
              </a>
            </li>
            <li>
              <a href="https://photographylife.com/what-is-exposure-triangle">
                The Exposure Triangle: A Beginner's Guide
              </a>
            </li>
          </ul>
          <p>
            <b>Other Simualtions</b>
          </p>
          <ul>
            <li>
              <a href="http://photography-mapped.com/interact.html">
                Photography Mapped Interactive
              </a>
            </li>
            <li>
              <a href="https://dofsimulator.net/en/">DOF Simulator</a>
            </li>
            <li>
              <a href="https://dima.fi/exposure/">
                Exposure Triangle Simulator 3.0
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Resources</h1>
          <p>
            The content written are based on the articles above. While I tried
            to use images I took in the past for examples, I couldn’t find great
            examples that work for all conditions. Thus, some images are
            gathered from the sources blow:
          </p>
          <p>
            <b>Image Credits</b>
          </p>
          <ul>
            <li>
              ISO:{" "}
              <a href="https://photographylife.com/what-is-iso-in-photography">
                What is ISO? The Complete Guide for Beginners
              </a>
            </li>
            <li>
              Shutter Speed:{" "}
              <a href="https://photographylife.com/what-is-shutter-speed-in-photography">
                Introduction to Shutter Speed in Photography
              </a>
            </li>
            <li>
              Aperture:{" "}
              <a href="https://photographylife.com/what-is-aperture-in-photography">
                Understanding Aperture in Photography
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
