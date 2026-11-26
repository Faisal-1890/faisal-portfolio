import "./ProfileShowcase.css";

function ProfileShowcase() {
  return (
    <section className="profile-showcase">
      {/* Section Heading */}
      <div className="profile-showcase-heading">
        <span>✦ MEET THE DEVELOPER ✦</span>
      </div>

      {/* Circular Profile Image */}
      <div className="profile-image-stage">
        <div className="profile-image-frame">
          <div className="profile-image-inner">
            <img
              src="/images/faisal-tech-profile.png"
              alt="Md. Faisal Mahmud"
              className="profile-showcase-image"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Floating Sparkles */}
        <span className="profile-spark spark-one">✦</span>
        <span className="profile-spark spark-two">✧</span>
        <span className="profile-spark spark-three">✦</span>
        <span className="profile-spark spark-four">✧</span>
      </div>

      {/* Professional Identity */}
      <div className="profile-professional-info">
        <h2>Md. Faisal Mahmud</h2>

        <p>
          CSE Graduate <span>|</span> MERN Stack Developer <span>|</span> IT
          Professional
        </p>
      </div>
    </section>
  );
}

export default ProfileShowcase;
