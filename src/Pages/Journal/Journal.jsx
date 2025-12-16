import React, { useState } from 'react';
import { FileText, Download, Eye, ChevronRight, BookOpen, Home, Users, Upload, Database, List, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { journalData } from './journalData';
import { reviewersData } from './reviewersData';
import { COLORS } from '../../utils/colors';
import JournalEditorial from './JournalEditorial';
import Reviewers from './Reviewers';

// Import AnimatedList for Reviewers
import AnimatedList from '../../Animations/AnimatedList'; // Adjust path if needed

const Journal = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [selectedVolId, setSelectedVolId] = useState(journalData[0].id);

    // Helper to get current volume
    const currentVolume = journalData.find(v => v.id === selectedVolId);

    // --- SUB-COMPONENTS FOR "AREA X" ---

    // 1. HOME TAB (Journal Description)
    const JournalHome = () => (
        <div className="max-w-4xl mx-auto p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100 bg-white">
            <h2 className="text-2xl font-bold mb-6" style={{ color: COLORS.textMain }}>About the Journal</h2>
            <p className="text-base md:text-lg leading-relaxed text-justify mb-6" style={{ color: COLORS.textMain }}>
            Journal of Groundwater Research (JGWR) is an International peer reviewed journal published by AGGS alias International Groundwater Congress (IGWC), India. The Editorial Board includes prominent researchers, scientists, academicians, and professionals working in the field of Groundwater and allied areas from all around the world. The first issue of JGWR is released on 18th December, 2012, on the eve of the 10th Anniversary of IGWC at Aurangabad during the IGWC-2012 conference. AGGS is a leading non-governmental professional organization in India serving the scientific community for the 10 years under the leadership of Dr. M. Thangrajan, Founder President, AGGS alias IGWC and his team. AGGS has been gradually growing and scaling new heights. Under its auspices, a series of conferences have been organized in various parts of the country. The peer-reviewed journal is another milestone that AGGS has achieved. JGWR, will provide a platform for publication of state-of-the-art research findings of groundwater scientists, hydrologists, geologists, hydro-geologists, geophysicists, engineers, environmental scientists, agricultural scientists, policy makers, economists, and so on from India and abroad. Prof. Vijay P. Singh, Texas A&M University, Texas, USA, is nominated as Editor-in-Chief and Prof. Mritunjay Kumar Singh, IIT(ISM), Dhanbad, is designated as Deputy Editor-in-Chief of JGWR. We invite original research articles for consideration of publication in JGWR.
            </p>
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
                <h3 className="font-bold mb-2" style={{ color: COLORS.primary }}>Call for Papers</h3>
                <p className="text-sm text-gray-700">
                    We invite original research articles for consideration of publication in JGWR. Prof. Vijay P. Singh, Texas A&M University, Texas, USA, is nominated as Editor-in-Chief.
                </p>
            </div>
        </div>
    );

    // 2. ARCHIVES TAB (Volume & Paper List)
    const JournalArchives = () => (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar: Volumes */}
            <div className="w-full lg:w-1/4 flex-shrink-0">
                <div className="rounded-xl p-4 shadow-sm border border-gray-100 bg-white sticky top-8">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: COLORS.textMain }}>
                        <Database size={18} style={{ color: COLORS.primary }} />
                        Volumes
                    </h3>
                    <div className="flex flex-col space-y-1 max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {journalData.map((vol) => (
                            <button
                                key={vol.id}
                                onClick={() => setSelectedVolId(vol.id)}
                                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-between`}
                                style={{
                                    backgroundColor: selectedVolId === vol.id ? COLORS.primary : 'transparent',
                                    color: selectedVolId === vol.id ? COLORS.surface : COLORS.textMuted
                                }}
                            >
                                <span className="truncate">{vol.title}</span>
                                {selectedVolId === vol.id && <ChevronRight size={14} />}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main: Papers */}
            <div className="w-full lg:w-3/4">
                <h2 className="text-xl font-bold mb-6 pb-2 border-b" style={{ color: COLORS.textMain, borderColor: COLORS.border }}>
                    Papers in {currentVolume?.title}
                </h2>
                {currentVolume?.papers.length > 0 ? (
                    <div className="space-y-4">
                        {currentVolume.papers.map((paper, index) => (
                            <div key={index} className="p-6 rounded-xl shadow-sm border border-gray-100 bg-white hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.textMain }}>{paper.title}</h3>
                                <p className="text-sm font-medium mb-2" style={{ color: COLORS.primary }}>{paper.authors}</p>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{paper.abstract}</p>
                                <div className="flex gap-3">
                                    <a href={paper.pdfLink} className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: COLORS.primary }}>
                                        <Eye size={14} /> Read
                                    </a>
                                    <a href={paper.pdfLink} download className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold border transition-colors hover:bg-gray-50" style={{ borderColor: COLORS.border, color: COLORS.textMain }}>
                                        <Download size={14} /> Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 rounded-xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-400">No papers uploaded for this volume yet.</p>
                    </div>
                )}
            </div>
        </div>
    );

    // 3. REVIEWERS TAB (Using AnimatedList)

    // 4. EDITORIAL BOARD (Placeholder)


    // 5. SUBMIT MANUSCRIPT (Placeholder)
    const JournalSubmit = () => (
        <div className="p-12 text-center rounded-2xl bg-white shadow-sm border border-gray-100">
            <Upload size={48} className="mx-auto mb-4 text-gray-300" />
            <h2 className="text-xl font-bold mb-2">Submit Manuscript</h2>
            <p className="text-gray-500">To submit your manuscript, kindly send it to:
                <a
                    href={`mailto:jgwr01@gmail.com`}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline mt-2"
                    style={{ color: COLORS.primary }}
                >
                    <Mail size={16} /> jgwr01@gmail.com
                </a></p>
        </div>
    );

    // 6. INDEXING (Placeholder)
    const JournalIndexing = () => (
        <div className="p-12 text-center rounded-2xl bg-white shadow-sm border border-gray-100">
            <List size={48} className="mx-auto mb-4 text-gray-300" />
            <h2 className="text-xl font-bold mb-2">List of Indexing</h2>
            <p className="text-gray-500">
                National Science Library <br/>
                Indian National Center(ISSN)<br/>
                NISCARE, 14, Satsang Vihar Marg<br/>
                New Delhi-110067<br/>
                Google Scholar, Indian Citation Index (ICI)</p>
        </div>
    );


    // --- MAIN RENDER ---
    return (
        <div className="min-h-screen w-full pb-24" style={{ backgroundColor: COLORS.background }}>

            {/* 1. HERO HEADER */}
            <div className="w-full py-12 px-6 text-center bg-white shadow-sm border-b border-gray-100">
                <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: COLORS.primary }}>
                    ISSN: 2321 - 4783
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: COLORS.textMain }}>
                    Journal of Groundwater Research
                </h1>
            </div>

            {/* 2. NAVIGATION BAR (The "Navbar" you requested) */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-3">
                        {[
                            { id: 'home', label: 'Home', icon: Home },
                            { id: 'archives', label: 'Archives', icon: Database },
                            { id: 'editorial', label: 'Editorial Board', icon: Users },
                            { id: 'submit', label: 'Submit Manuscript', icon: Upload },
                            { id: 'reviewers', label: 'Reviewers', icon: BookOpen },
                            { id: 'indexing', label: 'Indexing', icon: List },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                            flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                            ${activeTab === tab.id
                                        ? 'shadow-md scale-105'
                                        : 'hover:bg-gray-100 text-gray-600'}
                        `}
                                style={{
                                    backgroundColor: activeTab === tab.id ? COLORS.primary : 'transparent',
                                    color: activeTab === tab.id ? '#fff' : 'inherit'
                                }}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. DYNAMIC CONTENT AREA (Area X) */}
            <div className="max-w-7xl mx-auto px-4 py-12 min-h-[500px]">
                {activeTab === 'home' && <JournalHome />}
                {activeTab === 'archives' && <JournalArchives />}
                {activeTab === 'editorial' && <JournalEditorial />}
                {activeTab === 'submit' && <JournalSubmit />}
                {activeTab === 'reviewers' && <Reviewers />}
                {activeTab === 'indexing' && <JournalIndexing />}
            </div>

        </div>
    );
};

export default Journal;