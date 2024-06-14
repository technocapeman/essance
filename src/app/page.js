import Image from 'next/image';
import { TopBar } from '@/app/components/top-bar';
import { SearchBar } from '@/app/components/search-bar';
import { ApplicationCard } from '@/app/components/application-card';
import { HOC } from "@/app/infrastructure/hoc/hoc";

function Home() {
    return (
        <div className="bg-white min-h-screen relative">
            <TopBar />
            <div className="relative w-full h-screen">
                <Image
                    src="/images/MITHomePage.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Home Page Image"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">Search Essays Now!</h1>
                    <p className="mt-4 text-2xl sm:text-3xl md:text-4xl">
                        Browse our database of 3000+ verified essays and resumes
                    </p>
                    <div className="mt-8 w-full max-w-5xl">
                        <SearchBar />
                    </div>
                </div>
            </div>
            <div className="p-6 sm:p-8 md:p-12 lg:pl-20">
                <div className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-8">Top Results For You</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"> {/* Adjusted grid columns and gap */}
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="w-full">
                            <ApplicationCard
                                name="Ralph"
                                major="CS"
                                acceptedSchools={['MIT', 'Stanford', 'Yale']}
                                imageUrl="/images/MITHomePage.jpg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HOC(Home);
