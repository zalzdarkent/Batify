import Footer from '@/components/reusable/footer';
import Navbar from '@/components/reusable/navbar';
import { Head } from '@inertiajs/react';
import Jumbotron from './jumbotron';
import Marquee from './marquee';
import BestSeller from './best-seller';
import FeaturesProducts from './features-products';
import CameraSection from './camera-section';
import Testimoni from './testimoni';
import BlogSection from './blog-section';
import MainLayout from '@/layouts/main-layout';

export default function Welcome() {
    return (
        <MainLayout title='Halaman Utama'>
            <Jumbotron />
            <Marquee />
            <FeaturesProducts />
            <BestSeller />
            <CameraSection />
            <Testimoni />
            <BlogSection />
        </MainLayout>
    );
}
