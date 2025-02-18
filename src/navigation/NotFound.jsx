import React from 'react';
// import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main className="relative inset-0 h-[calc(100vh_-_50px)]">
            <div className="mx-auto max-w-7xl px-6 text-center h-full flex flex-col justify-center">
                <p className="font-medium leading-8 text-black text-7xl sm:text-9xl"
                    style={{
                        color: "#FFFFFF",
                        background: "#FFFFFF",
                        textShadow: "1px 3px 0 #969696, 1px 13px 5px #aba8a8"
                    }}>404</p>
                <h1 className="mt-12 text-3xl font-normal tracking-tight text-gray-500 sm:text-5xl sm:mt-6"
                >Page not found</h1>
                <p className="mt-4 text-base text-gray-500 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex justify-center">
                    {/* <Link to="/" className="text-sm font-semibold leading-7 text-black"> */}
                    <div className="text-sm font-semibold leading-7 text-black">
                        <span aria-hidden="true">&larr;</span> Go to home
                    </div>
                </div>
            </div>
        </main>
    )
}

export default React.memo(NotFound);