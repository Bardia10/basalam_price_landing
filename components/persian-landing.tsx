"use client"

import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingDown, Calculator, PieChart, ArrowRight, Banknote, Receipt } from "lucide-react"
import { useRef, useEffect } from "react"

export default function PersianLanding() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-3, 3, -3],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      dir="rtl"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-24 h-24 sm:top-16 sm:right-16 sm:w-32 sm:h-32 lg:top-20 lg:right-20 lg:w-48 lg:h-48 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-28 h-28 sm:bottom-16 sm:left-16 sm:w-36 sm:h-36 lg:bottom-20 lg:left-20 lg:w-56 lg:h-56 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      <motion.div
        style={{
          x: useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-15, 15]),
          y: useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-15, 15]),
        }}
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-20 text-orange-400/20 hidden sm:block lg:top-32 lg:right-32"
      >
        <DollarSign size={20} className="sm:w-6 sm:h-6" />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 left-20 text-purple-400/20 hidden sm:block lg:top-64 lg:left-32"
        style={{ animationDelay: "2s" }}
      >
        <Banknote size={22} className="sm:w-7 sm:h-7" />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 right-32 text-cyan-400/20 hidden sm:block lg:bottom-32 lg:right-64"
        style={{ animationDelay: "4s" }}
      >
        <Receipt size={20} className="sm:w-6 sm:h-6" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-start px-4 py-8 sm:px-6 sm:py-12 lg:px-8 font-[Vazirmatn]">
        <motion.div
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="text-center max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mb-8 sm:mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
          >
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-black tracking-wider relative">
                قیمت یار
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 blur-xl rounded-lg"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block mt-2 sm:mt-4 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            >
              یار همیشگی در مسیر{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                قیمت‌گذاری هوشمند
              </span>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto"
          >
            با یک نگاه، رقبا را ببینید و همیشه انتخاب درست داشته باشید.
          </motion.p>
        </motion.div>

        <motion.div
          ref={featuresRef}
          variants={containerVariants}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-xs sm:max-w-2xl lg:max-w-5xl xl:max-w-6xl mb-8 sm:mb-12"
        >
          {[
            {
              icon: DollarSign,
              title: "رقیب‌ها را شناسایی کن",
              description: "با جستجوی پیشرفته، سریع‌ترین راه برای یافتن رقبا",
              gradient: "from-cyan-500 to-blue-500",
            },
            {
              icon: PieChart,
              title: "مقایسه سریع رقبا",
              description: "محصول خود را انتخاب کنید و مشابه‌ترین محصولات رقبا را ببینید",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Calculator,
              title: "نمایش کمترین قیمت",
              description: "کمترین و میانگین قیمت رقبا را ببینید و مقایسه کنید",
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              icon: TrendingDown,
              title: "شناسایی قیمت‌های نامناسب",
              description: "محصولاتی که قیمتشان بالاتر از رقباست را پیدا کنید",
              gradient: "from-orange-500 to-yellow-500",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group rounded-xl border-0 bg-white/5 backdrop-blur-sm p-3 sm:p-4 lg:p-5 hover:bg-white/8 transition-all duration-300 h-full">
                <CardContent className="flex flex-col items-center text-center p-0 h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </motion.div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 text-white leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ctaRef}
          variants={containerVariants}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="text-center max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden border border-slate-600"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-4 sm:w-8 sm:h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded opacity-80" />
            <div className="absolute top-3 right-10 sm:top-4 sm:right-14 w-6 h-4 sm:w-8 sm:h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded opacity-60" />

            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-slate-400 text-xs font-mono">
              **** **** **** 1234
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-slate-400 text-xs">12/25</div>

            <div className="relative z-10 pt-3 sm:pt-4">
              <motion.h3
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight"
              >
                وقتشه که تصمیم‌های قیمتی هوشمند بگیری!
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-4 sm:mb-6 leading-relaxed"
              >
                به جمع هزاران کسب‌وکار موفق بپیوندید که با قیمت یار رقابت را برده‌اند
              </motion.p>

              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('https://panel-gheimatyar.vercel.app/signup', '_blank')
                  }
                }}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-xl hover:shadow-orange-500/20 transition-all duration-300 flex items-center gap-2 mx-auto shadow-sm leading-7 cursor-pointer"
              >
                <span>همین الان امتحان کن</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
