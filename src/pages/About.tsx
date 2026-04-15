import { motion } from 'motion/react';

const teamMembers = [
  {
    name: 'Lucas LaCour',
    role: 'Owner / Operator',
    bio: 'Founder of Upward Development with deep roots in real estate, timber, car wash, and billboard industries. Lucas leads every project with a commitment to quality, integrity, and faith.',
    email: 'lucas@upwarddevelopment.us',
    image: '/team-lucas.jpg',
  },
  {
    name: 'Faith LaCour',
    role: 'Operations Coordinator',
    bio: 'Faith keeps the business running smoothly behind the scenes — managing communications, scheduling, and client relations to ensure every project goes off without a hitch.',
    email: 'faith@upwardedevelopment.us',
    image: '/team-faith.jpg',
  },
  {
    name: 'Daniel LaCour',
    role: 'Lead Operator',
    bio: 'Daniel is the boots-on-the-ground force of Upward Development. From land clearing to steel erection, he brings skill, hustle, and precision to every job site.',
    email: null,
    image: '/team-daniel.jpg',
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/about-hero.jpg" 
            alt="About Us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              The LaCour Family Story. Built on a foundation of faith, family, and commercial-grade strength.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <div className="w-20 h-1.5 bg-primary mb-8"></div>
              
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2024, Upward Development was born from a history in the real estate, timber, carwash, and billboard industries. What began as a strategic move to secure the licensing and insurance necessary for our own large-scale projects quickly evolved into a true family passion. We discovered a collective love for the building process, leading us to extend our expertise beyond our own portfolio to serve the needs of our community.
                </p>
                <p>
                  Today, we are scaling rapidly to provide high-quality construction services for clients like you, driven by the same principles that have defined all our ventures: a reliable team, superior craftsmanship, and fair, transparent pricing. Most importantly, our mission transcends the job site; we approach every project with a commitment to excellence, ensuring all our work is pointed upward for the glory of God.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="/about-body.jpg" 
                  alt="About Upward Development" 
                  className="w-full h-auto transform scale-[1.15] origin-bottom-right grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 border-8 border-primary/20 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-sm shadow-xl hidden md:block">
                <div className="text-4xl font-bold font-heading mb-1">100%</div>
                <div className="text-sm font-bold uppercase tracking-wider">Family Owned</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Every project is personal. Meet the family behind the work.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group flex flex-col"
              >
                {/* Photo */}
                <div className="relative overflow-hidden rounded-sm bg-gray-900 mb-5 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{member.role}</div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{member.bio}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-primary hover:underline"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-12 text-center"
          >
            {[
              { stat: 'Faith', label: 'Our Foundation' },
              { stat: 'Family', label: 'Our Strength' },
              { stat: 'Excellence', label: 'Our Standard' },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-primary font-heading mb-2">{item.stat}</div>
                <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

