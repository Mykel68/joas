import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 py-5">
        <div className="flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-center text-primary">
              Register!
            </h1>
            <p className="py-2 text-center"></p>
          </div>
          <div className="  shadow-2xl bg-base-100 ">
            <form className="card-body">
              <div className="flex flex-row gap-3 mb-3">
                <div className="form-control basis-1/2">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-primary"
                    required
                  />
                </div>
                <div className="form-control basis-1/2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered input-primary"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 mb-3">
                <div className="form-control basis-1/2">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered input-primary"
                    required
                  />
                </div>
                <div className="form-control basis-1/2">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered input-primary"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 mb-3">
                <div className="form-control basis-1/2">
                  <label className="label">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="input input-bordered input-primary"
                    required
                  />
                </div>
                <div className="form-control basis-1/2">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Location"
                    className="input input-bordered input-primary"
                    required
                  />
                </div>
              </div>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Profile Picture</span>
                </div>
                <input
                  type="file"
                  className="file-input file-input-bordered input-primary w-full max-w-xs"
                />
              </label>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
              <div className="divider">OR</div>
              <div className="flex justify-between">
                <p className="text-center">
                  Already Have an Account?{" "}
                  <Link
                    href="/login"
                    className="label-text-alt link link-hover text-lg text-success"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
