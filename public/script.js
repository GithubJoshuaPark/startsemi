document.addEventListener('DOMContentLoaded', () => {
    const videoData = [
        {
            "section": "웨이퍼 잉곳 제조 영상",
            "subsection": "초크랄스키(CZ) 공정 영상",
            "videos": [
                {
                    "title": "UNSW Czochralski(Cz) 풀링",
                    "url": "https://www.youtube.com/watch?v=skRmyhSOu28",
                    "time": "0:48",
                    "views": "60,756회",
                    "producer": "UNSW eLearning",
                    "description": "실제 CZ법 잉곳 성장 과정 시연, 영어 자막 제공",
                    "features": "실제 장비에서의 잉곳 풀링 과정을 짧고 명확하게 보여줌"
                },
                {
                    "title": "실리콘 웨이퍼의 CZOCHRALSKI 공정",
                    "url": "https://www.youtube.com/watch?v=xftnhfa-Dmo",
                    "time": "2:01",
                    "views": "378,950회",
                    "producer": "Group3Section1",
                    "description": "초크랄스키 공정의 상세한 설명, 1916년 Jan Czochralski 발명 배경",
                    "features": "클래식 교육 영상으로 기본 원리 학습에 최적"
                },
                {
                    "title": "Animation of silicon ingot growth inside an LCT furnace",
                    "url": "https://www.youtube.com/watch?v=xo-ir73TA_U",
                    "time": "0:51",
                    "views": "48,908회",
                    "producer": "Linton Crystal Technologies",
                    "description": "LCT 퍼니스 내부 실리콘 잉곳 성장 애니메이션",
                    "features": "전문 장비 업체의 실제 공정 시각화"
                }
            ]
        },
        {
            "section": "웨이퍼 잉곳 제조 관련 영상",
            "subsection": "웨이퍼 제조 공정 전체 과정",
            "videos": [
                {
                    "title": "Silicon Wafer Production",
                    "url": "https://www.youtube.com/watch?v=AMgQ1-HdElM",
                    "time": "4:05",
                    "views": "497,131회",
                    "producer": "MicroChemicals",
                    "description": "CZ 성장 → 절단 → 연마 → 에칭 → 폴리싱 전체 과정",
                    "features": "웨이퍼 제조의 모든 단계를 포괄하는 종합 영상"
                },
                {
                    "title": "반도체 실리콘 웨이퍼Wafer 공정 소개 영상 KOR",
                    "url": "https://www.youtube.com/watch?v=6IbzdburisE",
                    "time": "4:20",
                    "views": "10,250회",
                    "producer": "주린아빠TV",
                    "description": "한국어로 제작된 웨이퍼 공정 소개",
                    "features": "국내 시청자를 위한 한국어 해설"
                },
                {
                    "title": "SK실트론 웨이퍼 공정 영상",
                    "url": "https://www.youtube.com/watch?v=ad-fZDchlo0",
                    "time": "4:19",
                    "views": "134,383회",
                    "producer": "SK실트론",
                    "description": "SK실트론 공식 제작, 한국 웨이퍼 제조업체 관점",
                    "features": "실제 산업 현장의 공정 소개"
                }
            ]
        },
        {
            "section": "웨이퍼 잉곳 제조 관련 영상",
            "subsection": "기술적 세부사항",
            "videos": [
                {
                    "title": "초크랄스키(CZ) 기법 상세 설명",
                    "url": "https://www.youtube.com/watch?v=DqyDraYuC_M",
                    "time": "9:05",
                    "views": "55,980회",
                    "producer": "THE BACKBENCH ENGINEERING COMMUNITY",
                    "description": "실험 설정부터 공정 원리까지 자세한 설명, VLSI 회로 설계 관점",
                    "features": "공학적 접근과 실험 설정에 대한 상세 정보"
                },
                {
                    "title": "Crystal Growth Stage by Czochralski process",
                    "url": "https://www.youtube.com/watch?v=RneQfTNaXQA",
                    "time": "0:50",
                    "views": "11,788회",
                    "producer": "Mr. SMART Engineering",
                    "description": "결정 성장 단계별 세부 과정",
                    "features": "간결하면서도 핵심적인 성장 과정 설명"
                }
            ]
        },
        {
            "section": "반도체 8대 공정 종합 영상",
            "subsection": "삼성전자 공식 영상",
            "videos": [
                {
                    "title": "'삼성전자'가 참 쉽게 알려주는 '반도체 8대공정'",
                    "url": "https://www.youtube.com/watch?v=M2b2kpJRHmM",
                    "time": "6:06",
                    "views": "537,191회",
                    "producer": "삼성전자 반도체 뉴스룸 ✓",
                    "description": "반도체 백과사전 EP.6, 가장 인기 있는 8대 공정 설명",
                    "features": "공식 채널의 검증된 정보, 초보자 친화적 설명"
                },
                {
                    "title": "8 Steps to Semiconductor Fabrication Explained with Lego® Bricks",
                    "url": "https://www.youtube.com/watch?v=gld0IHfbyF8",
                    "time": "4:36",
                    "views": "153,637회",
                    "producer": "삼성전자 반도체 뉴스룸 ✓",
                    "description": "레고 블록으로 설명하는 8대 공정 (영어)",
                    "features": "4K 화질, 창의적 접근 방식"
                }
            ]
        },
        {
            "section": "반도체 8대 공정 종합 영상",
            "subsection": "교육용 상세 영상",
            "videos": [
                {
                    "title": "반도체란 무엇일까? 반도체의 기본원리와 8대 공정",
                    "url": "https://www.youtube.com/watch?v=bAXxxmXCk1o",
                    "time": "28:24",
                    "views": "1,274,691회",
                    "producer": "bRd 3D",
                    "description": "가장 상세한 설명, 전체적인 반도체 이해",
                    "features": "127만 회 조회의 인기 영상, 기본 원리부터 심화까지"
                },
                {
                    "title": "반도체 8대 공정 속성 과외! 삼성전자 출신이 쉽게 설명",
                    "url": "https://www.youtube.com/watch?v=A2Ve5Z6J1ME",
                    "time": "47:12",
                    "views": "23,469회",
                    "producer": "연합뉴스경제TV ✓",
                    "description": "전문가 해설, 50분 완전 해설 버전",
                    "features": "실무 경험이 있는 전문가의 심화 설명"
                }
            ]
        },
        {
            "section": "반도체 8대 공정 종합 영상",
            "subsection": "비전공자 맞춤 영상",
            "videos": [
                {
                    "title": "비전공자를 위한 반도체 공정 / 제일 쉬운 설명!",
                    "url": "https://www.youtube.com/watch?v=ONXBN9zDVoQ",
                    "time": "15:11",
                    "views": "536,510회",
                    "producer": "기업핥기",
                    "description": "비전공자 눈높이, 영어 자막 제공",
                    "features": "53만 회 조회, 입문자에게 최적화"
                },
                {
                    "title": "반도체 엔지니어 아카데미 - 생산라인 구경 & 장비 회사",
                    "url": "https://www.youtube.com/watch?v=LcFH4tB0kdU",
                    "time": "11:51",
                    "views": "58,985회",
                    "producer": "mungineer",
                    "description": "실제 반도체 생산라인 소개, 장비 제조사 정보 포함",
                    "features": "현장 실무자 관점의 설비 및 생산라인 소개"
                }
            ]
        },
        {
            "section": "SiC/GaN 화합물 반도체 영상",
            "subsection": "GaN (질화갈륨) 전문 시리즈",
            "videos": [
                {
                    "title": "차세대 전력반도체 'GaN(질화갈륨)'?",
                    "url": "https://www.youtube.com/watch?v=WOuwhJwBOus",
                    "time": "1:10",
                    "views": "4,053회",
                    "producer": "아이브이웍스 IVWorks",
                    "description": "GaN 입문편, 차세대 화합물 반도체 소재 소개",
                    "features": "짧고 명확한 GaN 개념 정리"
                },
                {
                    "title": "내 이름은 '에피(Epi)' | GaN 적인 사이 Ep.2",
                    "url": "https://www.youtube.com/watch?v=G3tJrP-54vs",
                    "time": "1:43",
                    "views": "2,197회",
                    "producer": "아이브이웍스 IVWorks",
                    "description": "GaN 에피웨이퍼 설명, 질화갈륨의 단짝 에피 소개",
                    "features": "시리즈 구성으로 체계적 학습 가능"
                },
                {
                    "title": "화합물반도체 GaN(질화갈륨) 어디에 사용될까?",
                    "url": "https://www.youtube.com/watch?v=Xu7chI0ceMk",
                    "time": "1:21",
                    "views": "1,511회",
                    "producer": "아이브이웍스 IVWorks",
                    "description": "GaN 응용분야 소개",
                    "features": "실제 적용 사례와 응용 분야 설명"
                },
                {
                    "title": "반도체 GaN(질화갈륨) 에피웨이퍼 색상 차이, 성능에도 차이가?",
                    "url": "https://www.youtube.com/watch?v=0JPpO5GtTto",
                    "time": "2:15",
                    "views": "475회",
                    "producer": "아이브이웍스 IVWorks",
                    "description": "웨이퍼 색상과 성능의 상관관계",
                    "features": "실무적 관점의 품질 판별법"
                }
            ]
        },
        {
            "section": "SiC/GaN 화합물 반도체 영상",
            "subsection": "SiC (실리콘 카바이드) 전문 영상",
            "videos": [
                {
                    "title": "새로운 미래를 만들어갈 탄화규소(SiC) 전력반도체",
                    "url": "https://www.youtube.com/watch?v=iNFlQyV6tYM",
                    "time": "10:01",
                    "views": "20,443회",
                    "producer": "한국전기연구원(KERI)",
                    "description": "YTN 사이언스 협력, 차세대 반도체 소재",
                    "features": "연구기관의 전문적 관점"
                },
                {
                    "title": "[극찬기업] SIC 기반 전장용 반도체 기술",
                    "url": "https://www.youtube.com/watch?v=8PDr-A5l2Ac",
                    "time": "13:07",
                    "views": "15,892회",
                    "producer": "매일경제TV ✓",
                    "description": "기술 자립화 관점, 전장용 반도체 기술",
                    "features": "산업 전망과 기업 분석"
                }
            ]
        },
        {
            "section": "SiC/GaN 화합물 반도체 영상",
            "subsection": "화합물 반도체 시장 분석",
            "videos": [
                {
                    "title": "'반도체 전쟁'의 새로운 키워드 '차세대 전력반도체'",
                    "url": "https://www.youtube.com/watch?v=uiTwqRp-lUk",
                    "time": "13:03",
                    "views": "76,445회",
                    "producer": "티타임즈TV ✓",
                    "description": "시장 분석, SiC vs GaN 비교",
                    "features": "전력반도체 신소재의 필요성과 시장 전망"
                },
                {
                    "title": "화합물 반도체 시장, 이번엔 진짜 커진다",
                    "url": "https://www.youtube.com/watch?v=14opHBID4-g",
                    "time": "12:51",
                    "views": "27,287회",
                    "producer": "디일렉 THEELEC",
                    "description": "업계 전문 분석, 시장 성장 전망",
                    "features": "반도체 업계 전문 매체의 심층 분석"
                }
            ]
        },
        {
            "section": "특화 공정별 영상",
            "subsection": "개별 공정 마스터 시리즈 (삼성전자)",
            "videos": [
                {
                    "title": "[CMP] \"이 안에 다이아몬드 있다\" 💎연마공정의 놀라운 비밀",
                    "url": "https://www.youtube.com/watch?v=TABeQLKBFas",
                    "time": "4:51",
                    "views": "263,226회",
                    "producer": "삼성전자 반도체 뉴스룸 ✓",
                    "description": "CMP 연마공정 특집, 4K 화질",
                    "features": "다이아몬드를 사용한 연마 과정의 비밀"
                },
                {
                    "title": "[DIFF] 소울리스좌(X) 풀소울좌(O)가 알려주는 '디퓨전공정'",
                    "url": "https://www.youtube.com/watch?v=PjbAh2Yvlyg",
                    "time": "6:48",
                    "views": "227,799회",
                    "producer": "삼성전자 반도체 뉴스룸 ✓",
                    "description": "디퓨전공정 특집, 막 쌓기 과정",
                    "features": "4K 화질, 엔터테인먼트 요소 가미"
                }
            ]
        },
        {
            "section": "특화 공정별 영상",
            "subsection": "패키징 & 후공정",
            "videos": [
                {
                    "title": "[반도체 hy-스쿨2] HBM과 함께 하는 마지막 이야기(PKG공정)",
                    "url": "https://www.youtube.com/watch?v=k10GvzwYN2M",
                    "time": "18:26",
                    "views": "110,034회",
                    "producer": "SK하이닉스 [SK hynix] ✓",
                    "description": "패키징 공정, HBM 기술 설명",
                    "features": "SK하이닉스 공식 교육 시리즈"
                }
            ]
        },
        {
            "section": "특화 공정별 영상",
            "subsection": "추가 학습 영상",
            "videos": [
                {
                    "title": "반도체 공정 이해? 이 영상 보면 끝!",
                    "url": "https://www.youtube.com/watch?v=eUXh-KJIgyk",
                    "time": "12:15",
                    "views": "14,565회",
                    "producer": "공학칼럼",
                    "description": "웨이퍼 제조부터 전공정, 후공정까지 전체 과정",
                    "features": "반도체 스토리 시리즈의 종합편"
                },
                {
                    "title": "Samsung Semiconductor Technology",
                    "url": "https://www.youtube.com/watch?v=OhoagUtQD3c",
                    "time": "4:58",
                    "views": "323,120회",
                    "producer": "삼성전자 반도체 뉴스룸 ✓",
                    "description": "삼성 반도체 기술 종합 소개",
                    "features": "브랜드 기술력 소개 영상"
                }
            ]
        }
    ];

    const sections = {
        "웨이퍼 잉곳 제조 관련 영상": "wafer-ingot",
        "반도체 8대 공정 종합 영상": "eight-processes",
        "SiC/GaN 화합물 반도체 영상": "sic-gan",
        "특화 공정별 영상": "specialized-processes"
    };

    function getYouTubeEmbedUrl(url) {
        const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]{11})/);
        return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
    }

    for (const data of videoData) {
        const sectionId = sections[data.section];
        if (sectionId) {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                let subsectionDiv = targetSection.querySelector(`div[data-subsection="${data.subsection}"]`);
                if (!subsectionDiv) {
                    subsectionDiv = document.createElement('div');
                    subsectionDiv.setAttribute('data-subsection', data.subsection);
                    subsectionDiv.innerHTML = `<h3>${data.subsection}</h3><div class="video-grid"></div>`;
                    targetSection.appendChild(subsectionDiv);
                }
                const videoGrid = subsectionDiv.querySelector('.video-grid');

                for (const video of data.videos) {
                    const embedUrl = getYouTubeEmbedUrl(video.url);
                    if (embedUrl) {
                        const videoItem = document.createElement('div');
                        videoItem.classList.add('video-item');
                        videoItem.innerHTML = `
                            <iframe src="${embedUrl}" allowfullscreen></iframe>
                            <h5>${video.title}</h5>
                            <p><strong>시간:</strong> ${video.time}</p>
                            <p><strong>조회수:</strong> ${video.views}</p>
                            <p><strong>제작:</strong> ${video.producer}</p>
                            <p><strong>설명:</strong> ${video.description}</p>
                            <p><strong>특징:</strong> ${video.features}</p>
                        `;
                        videoGrid.appendChild(videoItem);
                    }
                }
            }
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hamburger menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }

    // Search functionality
    const searchSelect = document.getElementById('search-select');
    const allContentSections = document.querySelectorAll('main .section-content');

    function populateSearchOptions() {
        if (!searchSelect) return;

        // Get main section titles from H2 tags for cleaner names
        const sectionTitles = Array.from(
            document.querySelectorAll('#wafer-ingot h2, #eight-processes h2, #sic-gan h2, #specialized-processes h2')
        ).map(h2 => h2.textContent.replace(/^\d+\.\s*/, '').trim());

        // Get all unique subsection titles from the data
        const subsectionTitles = [...new Set(videoData.map(item => item.subsection))];

        // Combine, remove duplicates, and sort alphabetically (Korean-aware)
        const allSearchTerms = [...new Set([...sectionTitles, ...subsectionTitles])]
            .sort((a, b) => a.localeCompare(b, 'ko'));

        // Populate the select dropdown
        allSearchTerms.forEach(term => {
            const option = document.createElement('option');
            option.value = term;
            option.textContent = term;
            searchSelect.appendChild(option);
        });
    }

    if (searchSelect && allContentSections.length > 0) {
        populateSearchOptions(); // Populate dropdown on load

        searchSelect.addEventListener('change', e => {
            const searchTerm = e.target.value.toLowerCase().trim();

            allContentSections.forEach(section => {
                const sectionTitle = section.querySelector('h2')?.textContent.toLowerCase() || '';
                const subsections = section.querySelectorAll('div[data-subsection]');
                const isSectionMatch = sectionTitle.includes(searchTerm);
                let hasSubsectionMatch = false;

                // First, evaluate subsections
                subsections.forEach(sub => {
                    const subTitle = sub.querySelector('h3')?.textContent.toLowerCase() || '';
                    const isSubMatch = subTitle.includes(searchTerm);
                    if (isSubMatch) {
                        hasSubsectionMatch = true;
                    }
                    // Hide non-matching subsections for now
                    sub.classList.toggle('hidden', !isSubMatch);
                });
                // A section is visible if its title matches, or if it has at least one visible subsection.
                const shouldSectionBeVisible = isSectionMatch || hasSubsectionMatch;
                section.classList.toggle('hidden', !shouldSectionBeVisible);
                // If the main section title was a match, ensure all its subsections are visible,
                // overriding any hiding that happened in the loop above.
                if (isSectionMatch) {
                    subsections.forEach(sub => sub.classList.remove('hidden'));
                }
            });
        });
    }
});
