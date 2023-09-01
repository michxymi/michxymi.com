const Hero = (props) => (
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-left">
      <div className="max-w-md">{props.children}</div>
    </div>
  </div>
);

export default Hero;
