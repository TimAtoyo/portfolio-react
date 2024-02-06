import React from "react";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div className="flex flex-col gap-3">
      <div>Looks like you found a secret page. Lets take you back</div>
      <Link
      className="mx-3 font-bold text-purple-400 border px-2 py-3 bg-slate-200 bg-slate-500:hover"
      to="/">Home</Link>
    </div>
  );
}

export default NotFoundPage;
