type Certification = {
  date: string;
  title: string;
  description: string;
  organization: string;
  skills: string[];
  credentialId: string;
  validUntil?: string;
};

const certifications: Certification[] = [
  {
    date: "September 10, 2023",
    title: "GitHub Actions Professional Certificate",
    description:
      "Certification showing expertise in building automated workflows and CI/CD pipelines with GitHub Actions.",
    organization: "GitHub",
    skills: ["GitHub Actions", "Docker"],
    credentialId: "GHA-PRO-15935-2023",
  },

  {
    date: "June 15, 2023",
    title: "AWS Certified Solutions Architect - Professional",
    description:
      "Advanced AWS certification demonstrating expertise in designing distributed systems and applications on AWS platform.",
    organization: "Amazon Web Services",
    skills: ["AWS", "Docker", "Kubernetes"],
    credentialId: "AWS-PSA-12345-2023",
    validUntil: "June 15, 2026",
  },

  {
    date: "March 20, 2023",
    title: "Google Cloud Professional Cloud Architect",
    description:
      "Professional certification for designing, developing, and managing robust, secure, scalable cloud architecture on Google Cloud.",
    organization: "Google Cloud",
    skills: ["Google Cloud Platform", "Kubernetes", "Terraform"],
    credentialId: "GCP-PCA-67890-2023",
    validUntil: "March 20, 2025 (Expired)",
  },

  {
    date: "January 20, 2023",
    title: "Certified Kubernetes Administrator (CKA)",
    description:
      "Certification demonstrating the ability to perform the responsibilities of a Kubernetes administrator.",
    organization: "Cloud Native Computing Foundation",
    skills: ["Kubernetes", "Docker", "Terraform"],
    credentialId: "CKA-CNCF-86420-2023",
    validUntil: "January 20, 2026 (Expired)",
  },

  {
    date: "November 10, 2022",
    title: "TensorFlow Developer Certificate",
    description:
      "Certification demonstrating proficiency in building and training neural networks using TensorFlow 2.x.",
    organization: "Google & TensorFlow",
    skills: ["TensorFlow", "Python"],
    credentialId: "TF-DEV-24680-2022",
    validUntil: "November 10, 2025 (Expired)",
  },

  {
    date: "August 5, 2022",
    title: "Meta Front-End Developer Professional Certificate",
    description:
      "Comprehensive certification covering React, advanced JavaScript, UI/UX design, and modern front-end development practices.",
    organization: "Meta (Facebook)",
    skills: ["React", "TypeScript", "Responsive Design"],
    credentialId: "META-FE-13579-2022",
  },

  {
  date: "May 15, 2022",
  title: "MongoDB Certified Developer Associate",
  description:
    "Certification validating skills in MongoDB database development, schema design, and aggregation framework.",
  organization: "MongoDB Inc.",
  skills: ["MongoDB", "Node.js"],
  credentialId: "MONGO-DA-97531-2022",
  validUntil: "May 15, 2025 (Expired)",
},

{
  date: "December 5, 2021",
  title: "Deep Learning Specialization",
  description:
    "5-course specialization covering neural networks, deep learning, convolutional networks, sequence models, and hyperparameter tuning.",
  organization: "DeepLearning.AI & Coursera",
  skills: ["TensorFlow", "Python"],
  credentialId: "DL-SPEC-75319-2021",
},
];

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <div
      className="
        w-full
        rounded-xl
        bg-white
        p-3
        shadow-[0_12px_30px_rgba(0,0,0,0.12)]
        sm:p-4

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:translate-x-2
        hover:shadow-[0_25px_45px_rgba(0,0,0,0.18)]
      "
    >
    
      <div
        className="
          relative
          min-h-[500px]
          overflow-hidden
          border
          border-[#b8860b]
          bg-[#1b1b21]
          px-5
          py-7
          text-center
          text-white

          sm:min-h-[540px]
          sm:px-7
          sm:py-8

          lg:min-h-[575px]
          lg:px-8
          lg:py-9
        "
      >
        
        <div
          className="
            absolute
            left-3
            top-3
            h-12
            w-12
            border-l-2
            border-t-2
            border-[#d49b00]

            sm:left-4
            sm:top-4
          "
        >
          <span
            className="
              absolute
              -left-[6px]
              -top-[6px]
              h-4
              w-4
              rotate-45
              bg-[#d49b00]
            "
          />
        </div>

        
        <div
          className="
            absolute
            right-3
            top-3
            h-12
            w-12
            border-r-2
            border-t-2
            border-[#d49b00]

            sm:right-4
            sm:top-4
          "
        >
          <span
            className="
              absolute
              -right-[6px]
              -top-[6px]
              h-4
              w-4
              rotate-45
              bg-[#d49b00]
            "
          />
        </div>


        <div
          className="
            absolute
            bottom-3
            left-3
            h-12
            w-12
            border-b-2
            border-l-2
            border-[#d49b00]

            sm:bottom-4
            sm:left-4
          "
        >
          <span
            className="
              absolute
              -bottom-[6px]
              -left-[6px]
              h-4
              w-4
              rotate-45
              bg-[#d49b00]
            "
          />
        </div>

    
        <div
          className="
            absolute
            bottom-3
            right-3
            h-12
            w-12
            border-b-2
            border-r-2
            border-[#d49b00]

            sm:bottom-4
            sm:right-4
          "
        >
          <span
            className="
              absolute
              -bottom-[6px]
              -right-[6px]
              h-4
              w-4
              rotate-45
              bg-[#d49b00]
            "
          />
        </div>

        {/* Date */}
        <p
          className="
            mt-2
            text-xs
            text-gray-300

            sm:mt-3
            sm:text-sm
          "
        >
          {certification.date}
        </p>

        
        <p
          className="
            mt-5
            text-lg
            font-bold
            text-[#e0a800]

            sm:mt-6
            sm:text-xl
          "
        >
          CERTIFICATE
        </p>

        <p
          className="
            mt-1
            text-xs
            italic
            text-[#e0a800]

            sm:text-sm
          "
        >
          for
        </p>


        <h3
          className="
            mx-auto
            mt-6
            max-w-[520px]
            text-2xl
            font-bold
            leading-tight
            text-white

            sm:mt-7
            sm:text-3xl

            lg:text-[32px]
          "
        >
          {certification.title}
        </h3>

    
        <p
          className="
            mx-auto
            mt-7
            max-w-[500px]
            text-sm
            leading-6
            text-gray-300

            sm:mt-8
            sm:text-[15px]
            sm:leading-6
          "
        >
          {certification.description}
        </p>

        
        <h4
          className="
            mt-7
            text-xl
            font-bold
            text-white

            sm:mt-8
            sm:text-2xl
          "
        >
          {certification.organization}
        </h4>

        
        <div
          className="
            mt-5
            flex
            flex-wrap
            justify-center
            gap-2
          "
        >
          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="
                border
                border-[#8f6700]
                bg-[#6f5000]/20
                px-3
                py-1.5
                text-xs
                font-semibold
                text-[#e0a800]
              "
            >
              {skill}
            </span>
          ))}
        </div>

    
        {certification.validUntil && (
          <p
            className="
              mt-5
              text-xs
              text-gray-400

              sm:text-sm
            "
          >
            Valid Until:{" "}
            <span className="font-semibold text-gray-200">
              {certification.validUntil}
            </span>
          </p>
        )}

        
        <div className="mt-5">
          <p className="text-[11px] text-gray-500">
            Credential ID:
          </p>

          <p className="mt-1 text-[11px] text-gray-300">
            {certification.credentialId}
          </p>
        </div>

        
        <div
          className="
            mx-auto
            mt-5
            max-w-[510px]
            border-t
            border-[#735300]
          "
        />

    
        <button
          type="button"
          className="
            mt-5
            bg-[#e5ad00]
            px-6
            py-2.5
            text-sm
            font-medium
            text-black

            transition
            duration-200
            hover:bg-[#f2bd00]
          "
        >
          Verify Credential ↗
        </button>
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <section
      id="certifications"
      className="
        w-full
        bg-white
        px-4
        py-16

        sm:px-6
        sm:py-20

        lg:px-8
        lg:py-24
      "
    >
    
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="
            text-4xl
            font-bold
            tracking-tight
            text-black

            sm:text-5xl

            lg:text-6xl
            pt-35
          "
        >
          Certifications
        </h2>

        <p
          className="
            mt-4
            text-lg
            text-gray-500

            sm:text-xl
          "
        >
          Professional credentials and certifications
        </p>
      </div>

      {/* Certificate Grid */}
      <div
        className="
          mx-auto
          mt-12
          grid
          w-full
          max-w-[1200px]
          grid-cols-1
          gap-6

          sm:mt-14
          sm:gap-7

          lg:grid-cols-2
          lg:gap-6
        "
      >
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
          />
        ))}
      </div>
    </section>
  );
}

export default Certifications;