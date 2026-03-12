import { motion } from 'motion/react';

const projects = [
  {
    image: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.29350-15/334666367_5918263618289955_785628881346858755_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzA1NTQ1MDcwMTM3NTc0NDQ0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzB4NjU4LnNkci5kZWZhdWx0X2ltYWdlLkMzIn0%3D&_nc_ohc=EBn5zYDeb0gQ7kNvwEzZF-D&_nc_oc=AdmqNQ0KdKxoFHuTThOPBOtyopMIVPOxHY8X7mO9AkACJC2iZhtNC0QIkJ-5zBGiJL0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=CnwxHAmXTMCFRz9bV9Wg3w&_nc_ss=8&oh=00_AfwW0riQTsdfcLx26QnZklbRiaPi0xKS2PmohmVCQHHaxg&oe=69B8FF26',
    title: 'Lawn Maintenance',
    category: 'Lawn Care',
  },
  {
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/649229930_18113215210733556_1847958922013576393_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MjMwMjYyODYzODU0NTU3NTA4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=-1awZj83ZVwQ7kNvwFbnrev&_nc_oc=Adlwl99fLm6SmtnQLLpcaKefOyPwPElIZ0Cv3ct5MWpu16_y49HqeR1pCzl3VUNcMAs&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=CnwxHAmXTMCFRz9bV9Wg3w&_nc_ss=8&oh=00_Afw4IJHz42l7yEfy1yoTlSoAFvDDf-dSh1MN6ZnchqBKug&oe=69B90431',
    title: 'Garden Cleanup',
    category: 'Cleanups',
  },
  {
    image: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/648811943_18102663382809875_8522810921015982930_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MjMwMjA0MjA5ODg0NDk0MjczNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQzOS5zZHIuQzMifQ%3D%3D&_nc_ohc=WFy2GZI_GrEQ7kNvwESoDrs&_nc_oc=AdkK8oZotFotJuN6ikauI_JDOQxF_l18gt9glytPmJdARSTZnI5V0iusPvYyiOo_Vo0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=CnwxHAmXTMCFRz9bV9Wg3w&_nc_ss=8&oh=00_AfyU7qkIxxQer-XUVLfRv_yHJUtyfYjlcJ9w99lX4ETC6Q&oe=69B90CCB',
    title: 'Modern Landscaping',
    category: 'Landscaping',
  },
  {
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/648359811_18093366458014160_3288348784982259576_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MjI5MTA4NjQ5MTEwNzMyMzUyOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=8hteersKCjQQ7kNvwFZjCgN&_nc_oc=AdlDp1hIbuDQPIf006lbJ8f_K2xvqORiwSQ7aGuR8A8JMIVqxZfHA11tNolHmxlXDF0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=gXGaI2AjF1mYNs8HI0bWFw&_nc_ss=8&oh=00_Afz2AUEw6G7e6L9RFlzNNHiCVTMOs7THPZlfwd81-N_dSg&oe=69B8FDA2',
    title: 'Flower Bed Installation',
    category: 'Planting',
  },
  {
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.2885-15/35999315_1978024255561812_6153439540930412544_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MTgwOTg1NDkyODcxNDIzODA2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=yPN9CRUL7IIQ7kNvwEUCxyC&_nc_oc=AdmL5Qume4su7mZCDsTFHg4_XYbcfeS5b27dSO72_Q2DHj2f19wfv1wZWs9rtF6wcTc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_ss=8&oh=00_AfwCiBMWnahWNBSQJfP2hSkwo-5VvnPd749l39WhDwlbNA&oe=69B90568',
    title: 'Property Maintenance',
    category: 'Maintenance',
  },
  {
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=800&auto=format&fit=crop',
    title: 'Mulch & Soil',
    category: 'Landscaping',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">Our Recent Work</h2>
          <p className="text-base md:text-lg text-zinc-600">
            Browse through our portfolio of completed landscaping, lawn care, and cleanup projects across Philadelphia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-green-500 font-medium text-sm mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
