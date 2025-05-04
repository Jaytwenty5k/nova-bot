export default function SignIn() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Sign In</h1>
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <label className="block mb-4">
          <span className="text-gray-300">Email Address</span>
          <input
            type="email"
            className="mt-2 p-3 w-full rounded bg-gray-700 text-white"
            placeholder="Enter your email"
          />
        </label>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full w-full transition shadow-lg transform hover:scale-105"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-gray-400">
        Already have an account?{" "}
        <a href="/login" className="text-purple-400 hover:underline">
          Login
        </a>
      </p>
    </main>
  );
}
