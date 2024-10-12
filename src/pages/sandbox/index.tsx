import { motion } from "framer-motion"
import Layout from "layout/main"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Sandbox() {
  const router = useRouter()
  const [cookies, setCookies] = useState("")
  const [loading, setLoading] = useState(true)

  const handleSetCookie = () => {
    document.cookie = "name=John Doe"
    setCookies(document.cookie)
  }
  const timeOutededEvent = () => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }
  useEffect(() => {
    setCookies(document.cookie)
    setLoading(false)
    return () => {
      console.log("Unmounted")
    }
  }, [])
  return (
    <Layout>
      <p>this page for testing new features</p>
      <button onClick={handleSetCookie}>Set Cookie</button>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 5 } }}
          exit={{ opacity: 0 }}
        >
          <div className="text-4xl bg-blue-6 w-50 h-50">Sandbox</div>
        </motion.div>
        {loading? <div>loading...</div> : <div>done</div>}
        {cookies}
      </div>
    </Layout>
  )
}