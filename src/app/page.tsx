import { supabase } from "@/lib/supabase";
import Link from "next/link";

export const revalidate = 60;

async function getChannels() {
  const { data } = await supabase.from("youtube_university_channels").select("*").order("is_featured", { ascending: false });
  return data || [];
}

async function getVideos() {
  const { data } = await supabase.from("youtube_university_videos").select("*").order("created_at", { ascending: false }).limit(12);
  return data || [];
}

const categories = ["Business", "Economics", "Mathematics", "Science", "Technology", "Engineering", "General Education"];

export default async function Home() {
  const channels = await getChannels();
  const videos = await getVideos();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#080808] to-[#080808]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-red-600/5 blur-[120px]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <p className="font-mono text-xs tracking-[0.3em] text-red-500/70 uppercase mb-4">The Kollective Hospitality Group</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-light tracking-tight">
            YouTube<br/><span className="italic text-red-500">University</span>
          </h1>
          <p className="mt-6 font-mono text-sm text-white/40 max-w-md leading-relaxed">
            Curated knowledge. No algorithms. No noise. Just the best educational content on the internet, organized for real learning.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase mb-8">Browse Departments</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <div key={cat} className="group border border-white/5 hover:border-red-500/30 p-6 transition-all duration-500 cursor-pointer">
              <span className="font-display text-xl text-white/70 group-hover:text-red-400 transition-colors">{cat}</span>
              <div className="mt-2 w-0 group-hover:w-8 h-px bg-red-500 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Channels */}
      <section className="px-8 py-16 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase mb-8">Featured Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((ch: any) => (
            <a key={ch.id} href={ch.channel_url || "#"} target="_blank" rel="noopener" className="group block border border-white/5 hover:border-red-500/20 p-5 transition-all duration-500">
              <p className="font-display text-lg text-white/90 group-hover:text-red-400 transition-colors">{ch.channel_name}</p>
              <p className="font-mono text-[10px] tracking-widest text-white/30 uppercase mt-1">{ch.category}</p>
              <p className="text-xs text-white/40 mt-3 leading-relaxed line-clamp-2">{ch.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Latest Videos */}
      {videos.length > 0 && (
        <section className="px-8 py-16 max-w-6xl mx-auto border-t border-white/5">
          <h2 className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase mb-8">Latest Lectures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videos.map((v: any) => (
              <a key={v.id} href={v.youtube_url} target="_blank" rel="noopener" className="group block">
                <div className="aspect-video bg-white/5 border border-white/5 group-hover:border-red-500/30 transition-all overflow-hidden">
                  {v.thumbnail_url && <img src={v.thumbnail_url} alt={v.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />}
                </div>
                <p className="font-display text-sm mt-3 text-white/80 group-hover:text-red-400 transition-colors">{v.title}</p>
                <p className="font-mono text-[10px] text-white/30 mt-1">{v.category}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="font-mono text-[10px] text-white/20">© 2026 THE KOLLECTIVE HOSPITALITY GROUP</p>
          <p className="font-mono text-[10px] text-white/20">YOUTUBE UNIVERSITY</p>
        </div>
      </footer>
    </main>
  );
}
