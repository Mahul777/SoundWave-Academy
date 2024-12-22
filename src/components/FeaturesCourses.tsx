'use client'
import React from 'react'
import courseData from "../data/music_courses.json" // Import course data from a JSON file
import Link from "next/link"
import { BackgroundGradient } from './ui/background-gradient'

//define our own data type
interface Course
{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    
}
function FeaturesCourses() 
{
    // Filter the courses to get only featured ones and Course is come from data we defined our own data
   const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured== true)
  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"> {/* Responsive grid layout */}
            {featuredCourses.map((course:Course) => 
                (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"> {/* Card with background gradient */}
                           <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow"> {/* Inner content container */}
                           <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p> {/* Course title */}
                           <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p> {/* Course description */}
                           <Link href={`/courses/${course.slug}`}> {/* Link to the course detail page */}
                                        Learn More
                            </Link>
                            <div>test</div>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
            </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
            View All courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturesCourses