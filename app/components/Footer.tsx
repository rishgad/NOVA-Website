export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 text-white relative z-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="mb-2 sm:mb-0">&copy; 2024 Texas NOVA. All rights reserved.</p>
          <p className="text-sm text-gray-400 mb-2 sm:mb-0">NOVA: New Opportunities for Virtual Advancements</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
