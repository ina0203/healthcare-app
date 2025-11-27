import { useState } from 'react';
import { Calendar, Heart, Activity, FileText, User, Hospital, Pill, Phone, Clock, AlertCircle, TrendingUp, Award, Shield, FileCheck, Upload, Download, Search, ChevronRight, Plus, X, Check, Bell, Settings, LogOut, MapPin, Star, Sparkles, Camera, Microscope, Dna, Brain, TestTube, Utensils, Users, Share2, FileDown, Gift, Trophy, Zap, Target, CheckCircle } from 'lucide-react';

export default function HealthcareApp() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showDiagnosisModal, setShowDiagnosisModal] = useState(false);
  const [showFamilyShareModal, setShowFamilyShareModal] = useState(false);
  const [showFamilyRecordsModal, setShowFamilyRecordsModal] = useState(false);
  const [showMedicationReminderModal, setShowMedicationReminderModal] = useState(false);
  const [showInsuranceAssistModal, setShowInsuranceAssistModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedFamilyMember, setSelectedFamilyMember] = useState(null);

  const [userProfile] = useState({
    name: '김민수',
    age: 35,
    bloodType: 'A+',
    height: 175,
    weight: 70,
    allergies: ['페니실린', '땅콩'],
    chronicConditions: ['고혈압'],
    emergencyContact: '010-1234-5678',
    recentSymptoms: ['두통', '어지러움'],
    geneticRisk: {
      diabetes: 'high',
      heartDisease: 'medium',
      cancer: 'low',
      alzheimer: 'medium'
    }
  });

  const [familyMembers] = useState([
    { 
      id: 1, 
      name: '김영희', 
      relation: '어머니', 
      age: 65, 
      phone: '010-2234-5678', 
      hasAccess: true,
      recentRecords: [
        { date: '2024-11-15', hospital: '서울대병원', diagnosis: '고혈압 정기검진', doctor: '김철수' },
        { date: '2024-10-20', hospital: '연세병원', diagnosis: '관절염 치료', doctor: '이영희' }
      ]
    },
    { 
      id: 2, 
      name: '김철수', 
      relation: '아버지', 
      age: 67, 
      phone: '010-3234-5678', 
      hasAccess: true,
      recentRecords: [
        { date: '2024-11-10', hospital: '삼성병원', diagnosis: '당뇨 관리', doctor: '박민준' },
        { date: '2024-10-05', hospital: '서울대병원', diagnosis: '건강검진', doctor: '김철수' }
      ]
    }
  ]);

  const [rewardsData] = useState({
    totalPoints: 3250,
    level: 'Gold',
    nextLevel: 'Platinum',
    pointsToNextLevel: 750,
    achievements: [
      { id: 1, name: '건강 지킴이', description: '7일 연속 건강 데이터 기록', icon: '🏆', completed: true, points: 100 },
      { id: 2, name: '약속 지킴이', description: '진료 예약 3회 완료', icon: '⏰', completed: true, points: 150 },
      { id: 3, name: '식단 마스터', description: '식단 관리 14일 달성', icon: '🥗', completed: false, points: 200 },
      { id: 4, name: '만보 걷기', description: '하루 10,000보 달성', icon: '👟', completed: true, points: 100 }
    ],
    weeklyMissions: [
      { id: 1, title: '물 2L 마시기', progress: 5, total: 7, points: 50, completed: false },
      { id: 2, title: '진료 예약 확인', progress: 1, total: 1, points: 30, completed: true },
      { id: 3, title: '건강검진 받기', progress: 0, total: 1, points: 200, completed: false }
    ],
    benefits: [
      { id: 1, title: '병원 진료비 5% 할인', description: '제휴 병원 이용시', icon: '💰', active: true },
      { id: 2, title: '건강식품 10% 쿠폰', description: '다음달 15일까지', icon: '🎁', active: true },
      { id: 3, title: '프리미엄 건강검진 50% 할인', description: 'Gold 등급 이상', icon: '⭐', active: true }
    ]
  });

  const [selfDiagnosisData] = useState({
    bloodTest: {
      date: '2024-11-10',
      glucose: { value: 126, status: 'high', normal: '70-100 mg/dL' },
      cholesterol: { value: 220, status: 'high', normal: '<200 mg/dL' },
      hemoglobin: { value: 14.5, status: 'normal', normal: '13-17 g/dL' },
      whiteBloodCell: { value: 7.2, status: 'normal', normal: '4-11 K/μL' },
      triglycerides: { value: 180, status: 'high', normal: '<150 mg/dL' }
    },
    urineTest: {
      date: '2024-11-11',
      protein: { value: 'trace', status: 'warning', normal: 'negative' },
      glucose: { value: 'negative', status: 'normal', normal: 'negative' },
      blood: { value: 'negative', status: 'normal', normal: 'negative' },
      ph: { value: 6.5, status: 'normal', normal: '5.0-7.0' },
      ketones: { value: 'negative', status: 'normal', normal: 'negative' }
    },
    aiAnalysis: {
      overallRisk: 'medium-high',
      primaryConcerns: ['당뇨병 위험', '고지혈증', '신장 기능 저하 가능성'],
      recommendations: [
        '내분비내과 전문의 상담 권장',
        '신장내과 검진 필요',
        '혈당 관리 및 식이요법 필수'
      ],
      urgencyLevel: 'medium'
    }
  });

  const [appointments] = useState([
    { id: 1, hospital: '서울대병원', department: '내과', doctor: '김철수', date: '2024-11-20', time: '14:00', status: '예정' },
    { id: 2, hospital: '연세병원', department: '정형외과', doctor: '이영희', date: '2024-11-25', time: '10:30', status: '예정' }
  ]);

  const [medicalRecords] = useState([
    { id: 1, date: '2024-10-15', hospital: '서울대병원', diagnosis: '급성 상기도 감염', doctor: '김철수', prescription: '항생제, 해열제' },
    { id: 2, date: '2024-09-20', hospital: '연세병원', diagnosis: '요통', doctor: '이영희', prescription: '진통제, 물리치료' },
    { id: 3, date: '2024-08-10', hospital: '삼성병원', diagnosis: '정기검진', doctor: '박민준', prescription: '비타민 D' }
  ]);

  const [insuranceClaims] = useState([
    { id: 1, date: '2024-10-15', hospital: '서울대병원', amount: 150000, claimed: 120000, status: '승인', claimDate: '2024-10-16' },
    { id: 2, date: '2024-09-20', hospital: '연세병원', amount: 200000, claimed: 160000, status: '처리중', claimDate: '2024-09-21' },
    { id: 3, date: '2024-08-10', hospital: '삼성병원', amount: 80000, claimed: 64000, status: '승인', claimDate: '2024-08-11' }
  ]);

  const [healthMetrics] = useState({
    steps: 8432,
    stepsGoal: 10000,
    heartRate: 72,
    bloodPressure: { systolic: 120, diastolic: 80 },
    weight: 70,
    sleep: 7.5,
    water: 1.8,
    calories: 2100
  });

  const [mealPlan] = useState({
    currentStats: {
      calories: 2100,
      protein: 65,
      carbs: 280,
      fat: 70,
      targetCalories: 1800,
      targetProtein: 80,
      targetCarbs: 200,
      targetFat: 50
    },
    weeklyPlan: [
      {
        day: '월요일',
        breakfast: {
          name: '현미밥, 두부조림, 시금치나물',
          calories: 380,
          protein: 18,
          carbs: 52,
          fat: 8,
          image: '🍚'
        },
        lunch: {
          name: '귀리밥, 연어구이, 브로콜리무침',
          calories: 520,
          protein: 32,
          carbs: 48,
          fat: 18,
          image: '🐟'
        },
        dinner: {
          name: '현미밥, 닭가슴살샐러드, 양송이스프',
          calories: 450,
          protein: 35,
          carbs: 42,
          fat: 12,
          image: '🥗'
        }
      },
      {
        day: '화요일',
        breakfast: {
          name: '통밀빵, 아보카도, 삶은계란',
          calories: 360,
          protein: 16,
          carbs: 38,
          fat: 15,
          image: '🥖'
        },
        lunch: {
          name: '퀴노아밥, 두부스테이크, 채소볶음',
          calories: 480,
          protein: 28,
          carbs: 52,
          fat: 14,
          image: '🍱'
        },
        dinner: {
          name: '현미밥, 생선조림, 미역국',
          calories: 420,
          protein: 30,
          carbs: 45,
          fat: 10,
          image: '🐠'
        }
      },
      {
        day: '수요일',
        breakfast: {
          name: '오트밀, 베리, 아몬드우유',
          calories: 340,
          protein: 12,
          carbs: 48,
          fat: 10,
          image: '🥣'
        },
        lunch: {
          name: '현미밥, 닭가슴살, 구운야채',
          calories: 500,
          protein: 34,
          carbs: 50,
          fat: 12,
          image: '🍗'
        },
        dinner: {
          name: '퀴노아밥, 새우샐러드, 토마토수프',
          calories: 440,
          protein: 28,
          carbs: 46,
          fat: 14,
          image: '🦐'
        }
      },
      {
        day: '목요일',
        breakfast: {
          name: '현미밥, 계란찜, 김치',
          calories: 370,
          protein: 20,
          carbs: 44,
          fat: 10,
          image: '🥚'
        },
        lunch: {
          name: '귀리밥, 소고기채소볶음, 된장국',
          calories: 540,
          protein: 36,
          carbs: 52,
          fat: 16,
          image: '🥩'
        },
        dinner: {
          name: '현미밥, 두부구이, 숙주나물',
          calories: 400,
          protein: 24,
          carbs: 48,
          fat: 10,
          image: '🍲'
        }
      },
      {
        day: '금요일',
        breakfast: {
          name: '통밀토스트, 그릭요거트, 과일',
          calories: 380,
          protein: 18,
          carbs: 46,
          fat: 12,
          image: '🍞'
        },
        lunch: {
          name: '현미밥, 삼치구이, 콩나물무침',
          calories: 510,
          protein: 32,
          carbs: 50,
          fat: 14,
          image: '🐡'
        },
        dinner: {
          name: '퀴노아밥, 닭가슴살샐러드, 호박수프',
          calories: 430,
          protein: 30,
          carbs: 44,
          fat: 12,
          image: '🥙'
        }
      },
      {
        day: '토요일',
        breakfast: {
          name: '현미죽, 연두부, 김구이',
          calories: 320,
          protein: 14,
          carbs: 42,
          fat: 8,
          image: '🍵'
        },
        lunch: {
          name: '현미밥, 등푸른생선, 시래기국',
          calories: 490,
          protein: 34,
          carbs: 48,
          fat: 12,
          image: '🐟'
        },
        dinner: {
          name: '귀리밥, 두부샐러드, 채소스틱',
          calories: 410,
          protein: 22,
          carbs: 50,
          fat: 10,
          image: '🥕'
        }
      },
      {
        day: '일요일',
        breakfast: {
          name: '고구마, 삶은계란, 견과류',
          calories: 350,
          protein: 16,
          carbs: 48,
          fat: 12,
          image: '🍠'
        },
        lunch: {
          name: '현미밥, 닭가슴살샐러드, 양송이스프',
          calories: 480,
          protein: 32,
          carbs: 46,
          fat: 14,
          image: '🍄'
        },
        dinner: {
          name: '퀴노아밥, 연어구이, 브로콜리',
          calories: 460,
          protein: 34,
          carbs: 42,
          fat: 16,
          image: '🥦'
        }
      }
    ],
    healthGoals: [
      '혈당 관리를 위한 저GI 식단',
      '신장 건강을 위한 저나트륨 식단',
      '적정 단백질 섭취로 근육 유지',
      '식이섬유 풍부한 채소 중심'
    ]
  });

  const [hospitals] = useState([
    { 
      id: 1, 
      name: '서울대학교병원', 
      distance: 2.3,
      distanceText: '2.3km',
      rating: 4.8,
      reviewCount: 1250,
      departments: ['내과', '외과', '소아과', '정형외과', '신경과', '내분비내과', '신장내과'],
      specialties: ['고혈압', '당뇨', '심장질환', '신장질환', '고지혈증'],
      emergency: true,
      phone: '02-2072-2114',
      address: '서울특별시 종로구 대학로 103',
      waitTime: '30분',
      doctors: [
        { id: 1, name: '김철수', specialty: '내분비내과', experience: '15년', rating: 4.9, expertise: ['당뇨병', '고지혈증', '갑상선'], successRate: 94 },
        { id: 2, name: '박영희', specialty: '신장내과', experience: '12년', rating: 4.8, expertise: ['신장질환', '단백뇨', '투석'], successRate: 92 }
      ]
    },
    { 
      id: 2, 
      name: '삼성서울병원', 
      distance: 4.5,
      distanceText: '4.5km',
      rating: 4.9,
      reviewCount: 3200,
      departments: ['내과', '외과', '암센터', '심장내과', '뇌신경외과', '내분비내과'],
      specialties: ['암치료', '심혈관질환', '신경질환', '고혈압', '당뇨병', '고지혈증'],
      emergency: true,
      phone: '02-3410-2114',
      address: '서울특별시 강남구 일원로 81',
      waitTime: '60분',
      doctors: [
        { id: 7, name: '박민준', specialty: '내분비내과', experience: '25년', rating: 5.0, expertise: ['당뇨병', '고혈압', '고지혈증', '대사증후군'], successRate: 97 },
        { id: 8, name: '강서연', specialty: '신경과', experience: '15년', rating: 4.9, expertise: ['두통', '어지러움', '뇌졸중'], successRate: 95 }
      ]
    },
    { 
      id: 3, 
      name: '연세세브란스병원', 
      distance: 3.1,
      distanceText: '3.1km',
      rating: 4.7,
      reviewCount: 2100,
      departments: ['내과', '외과', '산부인과', '안과', '이비인후과', '내분비내과'],
      specialties: ['암치료', '심장질환', '뇌질환', '당뇨병'],
      emergency: true,
      phone: '02-2228-5800',
      address: '서울특별시 서대문구 연세로 50-1',
      waitTime: '45분',
      doctors: [
        { id: 5, name: '이영희', specialty: '정형외과', experience: '20년', rating: 4.9, expertise: ['척추', '관절'], successRate: 93 },
        { id: 6, name: '정수진', specialty: '내분비내과', experience: '18년', rating: 4.8, expertise: ['당뇨병', '심장질환', '대사질환'], successRate: 91 }
      ]
    },
    { 
      id: 4, 
      name: '강남성심병원', 
      distance: 1.8,
      distanceText: '1.8km',
      rating: 4.5,
      reviewCount: 890,
      departments: ['내과', '외과', '정형외과', '피부과'],
      specialties: ['피부질환', '관절염', '소화기질환'],
      emergency: false,
      phone: '02-829-5114',
      address: '서울특별시 동작구 상도로 1',
      waitTime: '15분',
      doctors: [
        { id: 3, name: '이민수', specialty: '내과', experience: '10년', rating: 4.6, expertise: ['소화기', '간질환'], successRate: 88 },
        { id: 4, name: '최지연', specialty: '피부과', experience: '8년', rating: 4.7, expertise: ['아토피', '여드름'], successRate: 89 }
      ]
    }
  ]);

  const handleFamilyAppointment = (member) => {
    setSelectedFamilyMember(member);
    setShowAppointmentModal(true);
  };

  const handleFamilyRecords = (member) => {
    setSelectedFamilyMember(member);
    setShowFamilyRecordsModal(true);
  };

  const handleFamilyShare = (member) => {
    setSelectedFamilyMember(member);
    setShowFamilyShareModal(true);
  };

  const handleBulkDownload = () => {
    alert('가족 구성원의 모든 진료 기록을 PDF로 다운로드합니다.\n\n다운로드 항목:\n- 김영희님 진료기록 (2건)\n- 김철수님 진료기록 (2건)\n\n파일명: 가족진료기록_20241124.pdf');
  };

  const handleProxyAppointment = () => {
    alert('대리 예약 관리 페이지로 이동합니다.\n\n가족 구성원의 예약을 대신 관리할 수 있습니다.');
  };

  const handleMedicationReminder = () => {
    setShowMedicationReminderModal(true);
  };

  const handleInsuranceAssist = () => {
    setShowInsuranceAssistModal(true);
  };

  const HomeSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">안녕하세요, {userProfile.name}님!</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5" />
              <span className="text-sm opacity-90">심박수</span>
            </div>
            <p className="text-2xl font-bold">{healthMetrics.heartRate} bpm</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5" />
              <span className="text-sm opacity-90">혈압</span>
            </div>
            <p className="text-2xl font-bold">{healthMetrics.bloodPressure.systolic}/{healthMetrics.bloodPressure.diastolic}</p>
          </div>
        </div>
      </div>

      {selfDiagnosisData.aiAnalysis.urgencyLevel !== 'low' && (
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-orange-900 mb-1">건강 주의 알림</p>
              <p className="text-sm text-orange-800 mb-2">최근 자가진단 결과를 확인해주세요</p>
              <button 
                onClick={() => setCurrentSection('diagnosis')}
                className="text-sm text-orange-600 font-medium hover:text-orange-700"
              >
                자세히 보기 →
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-500" />
          오늘의 활동
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">걸음 수</span>
              <span className="text-sm font-medium">{healthMetrics.steps.toLocaleString()} / {healthMetrics.stepsGoal.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${(healthMetrics.steps / healthMetrics.stepsGoal) * 100}%` }}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">{healthMetrics.sleep}h</p>
              <p className="text-xs text-gray-600">수면</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">{healthMetrics.water}L</p>
              <p className="text-xs text-gray-600">물 섭취</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-500">{healthMetrics.calories}</p>
              <p className="text-xs text-gray-600">칼로리</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setCurrentSection('diagnosis')}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl p-4 flex flex-col items-center gap-2 transition-colors"
        >
          <Camera className="w-8 h-8" />
          <span className="font-medium">AI 자가진단</span>
        </button>
        <button 
          onClick={() => setCurrentSection('hospital')}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-4 flex flex-col items-center gap-2 transition-colors"
        >
          <Hospital className="w-8 h-8" />
          <span className="font-medium">병원 찾기</span>
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-500" />
          예정된 진료
        </h3>
        {appointments.length > 0 ? (
          <div className="space-y-3">
            {appointments.slice(0, 2).map(apt => (
              <div key={apt.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">{apt.hospital}</p>
                    <p className="text-sm text-gray-600">{apt.department} - {apt.doctor} 의사</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    {apt.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {apt.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {apt.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">예정된 진료가 없습니다</p>
        )}
      </div>
    </div>
  );

  const DiagnosisSection = () => {
    const [activeTest, setActiveTest] = useState('blood');

    const getRiskColor = (status) => {
      if (status === 'high') return 'text-red-600 bg-red-50';
      if (status === 'warning' || status === 'medium') return 'text-orange-600 bg-orange-50';
      return 'text-green-600 bg-green-50';
    };

    const getRiskText = (risk) => {
      if (risk === 'high') return '높음';
      if (risk === 'medium') return '중간';
      return '낮음';
    };

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold">AI 종합 분석</h3>
              <p className="text-sm opacity-90">최신 검사: {selfDiagnosisData.bloodTest.date}</p>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <p className="text-sm opacity-90 mb-2">종합 건강 위험도</p>
            <p className="text-2xl font-bold mb-3">
              {selfDiagnosisData.aiAnalysis.overallRisk === 'medium-high' ? '주의 필요' : '양호'}
            </p>
            <div className="space-y-1">
              {selfDiagnosisData.aiAnalysis.primaryConcerns.map((concern, idx) => (
                <p key={idx} className="text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {concern}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex gap-2 mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTest('blood')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTest === 'blood'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <TestTube className="w-4 h-4 inline mr-1" />
              혈액검사
            </button>
            <button
              onClick={() => setActiveTest('urine')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTest === 'urine'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Microscope className="w-4 h-4 inline mr-1" />
              소변검사
            </button>
            <button
              onClick={() => setActiveTest('genetic')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTest === 'genetic'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Dna className="w-4 h-4 inline mr-1" />
              유전자 분석
            </button>
            <button
              onClick={() => setActiveTest('meal')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTest === 'meal'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Utensils className="w-4 h-4 inline mr-1" />
              식단 관리
            </button>
          </div>

          {activeTest === 'blood' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">혈액검사 결과</h3>
                <button 
                  onClick={() => setShowDiagnosisModal(true)}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2 text-sm"
                >
                  <Camera className="w-4 h-4" />
                  새 검사 스캔
                </button>
              </div>

              {Object.entries(selfDiagnosisData.bloodTest)
                .filter(([key]) => key !== 'date')
                .map(([key, data]) => (
                  <div key={key} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <p className="font-medium capitalize">
                          {key === 'glucose' ? '혈당' : 
                           key === 'cholesterol' ? '콜레스테롤' :
                           key === 'hemoglobin' ? '헤모글로빈' :
                           key === 'whiteBloodCell' ? '백혈구' :
                           key === 'triglycerides' ? '중성지방' : key}
                        </p>
                        <p className="text-sm text-gray-600">정상범위: {data.normal}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(data.status)}`}>
                        {data.status === 'high' ? '높음' : data.status === 'low' ? '낮음' : '정상'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-bold text-gray-900">{data.value}</p>
                      {data.status !== 'normal' && (
                        <p className="text-sm text-gray-600">
                          {data.status === 'high' ? '⚠️ 주의 필요' : '⚠️ 관찰 필요'}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}

          {activeTest === 'urine' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">소변검사 결과</h3>
                <button 
                  onClick={() => setShowDiagnosisModal(true)}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2 text-sm"
                >
                  <Camera className="w-4 h-4" />
                  새 검사 스캔
                </button>
              </div>

              {Object.entries(selfDiagnosisData.urineTest)
                .filter(([key]) => key !== 'date')
                .map(([key, data]) => (
                  <div key={key} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <p className="font-medium capitalize">
                          {key === 'protein' ? '단백질' : 
                           key === 'glucose' ? '포도당' :
                           key === 'blood' ? '혈액' :
                           key === 'ph' ? 'pH' :
                           key === 'ketones' ? '케톤' : key}
                        </p>
                        <p className="text-sm text-gray-600">정상범위: {data.normal}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(data.status)}`}>
                        {data.status === 'warning' ? '주의' : data.status === 'normal' ? '정상' : '이상'}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{data.value}</p>
                  </div>
                ))}
            </div>
          )}

          {activeTest === 'genetic' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">유전자 위험도 분석</h3>
                <span className="text-sm text-gray-600">가족력 기반</span>
              </div>

              {Object.entries(userProfile.geneticRisk).map(([condition, risk]) => (
                <div key={condition} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <Dna className="w-5 h-5 text-purple-500" />
                      <p className="font-medium">
                        {condition === 'diabetes' ? '당뇨병' :
                         condition === 'heartDisease' ? '심장질환' :
                         condition === 'cancer' ? '암' :
                         condition === 'alzheimer' ? '알츠하이머' : condition}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(risk)}`}>
                      위험도 {getRiskText(risk)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        risk === 'high' ? 'bg-red-500' : 
                        risk === 'medium' ? 'bg-orange-500' : 'bg-green-500'
                      }`}
                      style={{ 
                        width: risk === 'high' ? '80%' : risk === 'medium' ? '50%' : '20%' 
                      }}
                    />
                  </div>
                  {risk === 'high' && (
                    <p className="text-sm text-red-600 mt-2">
                      정기적인 검진과 예방 관리가 필요합니다
                    </p>
                  )}
                </div>
              ))}

              <div className="bg-purple-50 rounded-lg p-4 mt-4">
                <p className="text-sm text-purple-900 font-medium mb-2">
                  ℹ️ 유전자 분석 정보
                </p>
                <p className="text-sm text-purple-800">
                  가족력과 유전적 요인을 바탕으로 분석된 결과입니다. 
                  정기적인 검진으로 조기 발견 및 예방이 가능합니다.
                </p>
              </div>
            </div>
          )}

          {activeTest === 'meal' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">맞춤 식단 관리</h3>
                    <p className="text-sm opacity-90">질병 맞춤 영양 균형 식단</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                    <p className="text-xs opacity-90 mb-1">목표 칼로리</p>
                    <p className="text-lg font-bold">{mealPlan.currentStats.targetCalories}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                    <p className="text-xs opacity-90 mb-1">단백질</p>
                    <p className="text-lg font-bold">{mealPlan.currentStats.targetProtein}g</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                    <p className="text-xs opacity-90 mb-1">탄수화물</p>
                    <p className="text-lg font-bold">{mealPlan.currentStats.targetCarbs}g</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                    <p className="text-xs opacity-90 mb-1">지방</p>
                    <p className="text-lg font-bold">{mealPlan.currentStats.targetFat}g</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  건강 목표
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {mealPlan.healthGoals.map((goal, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-blue-800">
                      <Check className="w-4 h-4 text-blue-600" />
                      {goal}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">7일 식단표</h3>
                <div className="space-y-4">
                  {mealPlan.weeklyPlan.map((dayPlan, dayIdx) => (
                    <div key={dayIdx} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-500 transition-colors">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3">
                        <h4 className="font-bold text-white flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          {dayPlan.day}
                        </h4>
                      </div>
                      <div className="p-4 space-y-4">
                        {/* 아침 */}
                        <div className="bg-yellow-50 rounded-lg p-4">
                          <div className="flex items-start gap-4">
                            <div className="text-5xl">{dayPlan.breakfast.image}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-bold text-gray-900">🌅 아침</h5>
                                <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-xs font-medium">
                                  {dayPlan.breakfast.calories} kcal
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 mb-3">{dayPlan.breakfast.name}</p>
                              <div className="flex gap-4 text-xs text-gray-600">
                                <span>🥩 단백질 {dayPlan.breakfast.protein}g</span>
                                <span>🍚 탄수화물 {dayPlan.breakfast.carbs}g</span>
                                <span>🥑 지방 {dayPlan.breakfast.fat}g</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 점심 */}
                        <div className="bg-orange-50 rounded-lg p-4">
                          <div className="flex items-start gap-4">
                            <div className="text-5xl">{dayPlan.lunch.image}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-bold text-gray-900">☀️ 점심</h5>
                                <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-medium">
                                  {dayPlan.lunch.calories} kcal
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 mb-3">{dayPlan.lunch.name}</p>
                              <div className="flex gap-4 text-xs text-gray-600">
                                <span>🥩 단백질 {dayPlan.lunch.protein}g</span>
                                <span>🍚 탄수화물 {dayPlan.lunch.carbs}g</span>
                                <span>🥑 지방 {dayPlan.lunch.fat}g</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 저녁 */}
                        <div className="bg-purple-50 rounded-lg p-4">
                          <div className="flex items-start gap-4">
                            <div className="text-5xl">{dayPlan.dinner.image}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-bold text-gray-900">🌙 저녁</h5>
                                <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-medium">
                                  {dayPlan.dinner.calories} kcal
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 mb-3">{dayPlan.dinner.name}</p>
                              <div className="flex gap-4 text-xs text-gray-600">
                                <span>🥩 단백질 {dayPlan.dinner.protein}g</span>
                                <span>🍚 탄수화물 {dayPlan.dinner.carbs}g</span>
                                <span>🥑 지방 {dayPlan.dinner.fat}g</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-medium text-gray-700">하루 총 칼로리</span>
                            <span className="font-bold text-green-600">
                              {dayPlan.breakfast.calories + dayPlan.lunch.calories + dayPlan.dinner.calories} kcal
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-900 font-medium mb-2">
                  💡 식단 관리 팁
                </p>
                <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                  <li>당뇨 관리를 위해 저GI 식품 위주로 구성했습니다</li>
                  <li>신장 건강을 위해 나트륨을 최소화했습니다</li>
                  <li>매 끼니 적절한 단백질 섭취로 근육을 유지하세요</li>
                  <li>식이섬유가 풍부한 채소를 충분히 섭취하세요</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            AI 맞춤 권장사항
          </h3>
          <div className="space-y-3">
            {selfDiagnosisData.aiAnalysis.recommendations.map((rec, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                <Check className="w-5 h-5 text-purple-500 mt-0.5" />
                <p className="text-sm text-gray-800">{rec}</p>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentSection('hospital')}
            className="w-full mt-4 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
          >
            추천 병원 보기
          </button>
        </div>
      </div>
    );
  };

  const HospitalSection = () => {
    const [sortBy, setSortBy] = useState('recommended');
    const [searchTerm, setSearchTerm] = useState('');

    const getAdvancedRecommendationScore = (hospital) => {
      let score = 0;
      
      const distanceScore = Math.max(0, 100 - (hospital.distance * 10));
      score += distanceScore * 0.2;
      
      const ratingScore = (hospital.rating / 5) * 100;
      score += ratingScore * 0.15;
      
      const diagnosisConcerns = selfDiagnosisData.aiAnalysis.primaryConcerns;
      const matchingSpecialties = hospital.specialties.filter(spec => 
        diagnosisConcerns.some(concern => concern.includes(spec) || spec.includes('당뇨') || spec.includes('신장'))
      );
      const diagnosisMatchScore = (matchingSpecialties.length / Math.max(diagnosisConcerns.length, 1)) * 100;
      score += diagnosisMatchScore * 0.35;
      
      const highRiskConditions = Object.entries(userProfile.geneticRisk)
        .filter(([_, risk]) => risk === 'high' || risk === 'medium')
        .map(([condition]) => condition);
      const geneticMatchCount = hospital.specialties.filter(spec => 
        highRiskConditions.some(condition => 
          (condition === 'diabetes' && spec.includes('당뇨')) ||
          (condition === 'heartDisease' && spec.includes('심장')) ||
          (condition === 'alzheimer' && spec.includes('신경'))
        )
      ).length;
      const geneticScore = (geneticMatchCount / Math.max(highRiskConditions.length, 1)) * 100;
      score += geneticScore * 0.2;
      
      const avgSuccessRate = hospital.doctors.reduce((sum, doc) => sum + (doc.successRate || 0), 0) / hospital.doctors.length;
      score += avgSuccessRate * 0.1;
      
      return score;
    };

    const sortedHospitals = [...hospitals].sort((a, b) => {
      if (sortBy === 'distance') {
        return a.distance - b.distance;
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'recommended') {
        return getAdvancedRecommendationScore(b) - getAdvancedRecommendationScore(a);
      }
      return 0;
    });

    const filteredHospitals = sortedHospitals.filter(hospital =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.departments.some(dept => dept.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleBookAppointment = (hospital, doctor = null) => {
      setSelectedHospital(hospital);
      setSelectedDoctor(doctor);
      setShowAppointmentModal(true);
    };

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Brain className="w-6 h-6" />
            <h3 className="text-lg font-bold">AI 정밀 진단 기반 추천</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p className="opacity-90">📊 최근 검사 결과 분석 완료</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {selfDiagnosisData.aiAnalysis.primaryConcerns.map((concern, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs">
                  {concern}
                </span>
              ))}
            </div>
            <p className="opacity-90 mt-2">🧬 유전적 위험 요인 고려됨</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="병원 또는 진료과 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSortBy('recommended')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                sortBy === 'recommended'
                  ? 'bg-purple-500 text-white'
                  : 'bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Brain className="w-4 h-4 inline mr-1" />
              AI 정밀 추천
            </button>
            <button
              onClick={() => setSortBy('distance')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                sortBy === 'distance'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <MapPin className="w-4 h-4 inline mr-1" />
              가까운순
            </button>
            <button
              onClick={() => setSortBy('rating')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                sortBy === 'rating'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Star className="w-4 h-4 inline mr-1" />
              평점순
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredHospitals.map((hospital, index) => {
            const recommendationScore = getAdvancedRecommendationScore(hospital);
            const isTopRecommended = sortBy === 'recommended' && index === 0;
            
            const diagnosisMatches = hospital.specialties.filter(spec => 
              selfDiagnosisData.aiAnalysis.primaryConcerns.some(concern => 
                concern.includes(spec) || spec.includes('당뇨') || spec.includes('신장')
              )
            );

            const geneticMatches = hospital.specialties.filter(spec => 
              Object.entries(userProfile.geneticRisk)
                .filter(([_, risk]) => risk === 'high')
                .some(([condition]) => 
                  (condition === 'diabetes' && spec.includes('당뇨')) ||
                  (condition === 'heartDisease' && spec.includes('심장'))
                )
            );

            const recommendedDoctors = hospital.doctors
              .filter(doctor => 
                doctor.expertise.some(exp => 
                  selfDiagnosisData.aiAnalysis.primaryConcerns.some(concern => 
                    concern.includes(exp) || concern.includes('당뇨') && exp.includes('당뇨')
                  )
                )
              )
              .sort((a, b) => (b.successRate || 0) - (a.successRate || 0))
              .slice(0, 2);

            return (
              <div 
                key={hospital.id} 
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                  isTopRecommended ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {isTopRecommended && (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-2 text-purple-600">
                      <Brain className="w-5 h-5" />
                      <span className="font-bold text-sm">AI 최적 추천 병원</span>
                    </div>
                    <span className="ml-auto bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                      정확도 {Math.round(recommendationScore)}%
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold">{hospital.name}</h3>
                      {hospital.emergency && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">응급실</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{hospital.address}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {hospital.distanceText}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {hospital.rating} ({hospital.reviewCount})
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        대기 {hospital.waitTime}
                      </span>
                    </div>

                    {diagnosisMatches.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs font-medium text-gray-700 mb-1 flex items-center gap-1">
                          <TestTube className="w-3 h-3" />
                          검사 결과 맞춤 전문 분야
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {diagnosisMatches.map((match, idx) => (
                            <span key={idx} className="px-2 py-1 bg-red-50 text-red-700 rounded text-xs font-medium">
                              ✓ {match}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {geneticMatches.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs font-medium text-gray-700 mb-1 flex items-center gap-1">
                          <Dna className="w-3 h-3" />
                          유전적 위험 대응 전문
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {geneticMatches.map((match, idx) => (
                            <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium">
                              ✓ {match}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {recommendedDoctors.length > 0 && (
                  <div className="mb-4 border-t pt-4">
                    <p className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                      {userProfile.name}님께 최적화된 의료진
                    </p>
                    <div className="space-y-2">
                      {recommendedDoctors.map(doctor => (
                        <div key={doctor.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-medium text-sm">{doctor.name} 전문의</p>
                              <span className="text-xs text-gray-600">({doctor.specialty})</span>
                              <span className="flex items-center gap-1 text-xs">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                {doctor.rating}
                              </span>
                              <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                                성공률 {doctor.successRate}%
                              </span>
                            </div>
                            <p className="text-xs text-gray-600">경력 {doctor.experience} • {doctor.expertise.join(', ')}</p>
                          </div>
                          <button 
                            onClick={() => handleBookAppointment(hospital, doctor)}
                            className="px-3 py-1.5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-xs font-medium whitespace-nowrap ml-2"
                          >
                            바로 예약
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <button 
                    onClick={() => handleBookAppointment(hospital)}
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                  >
                    병원 예약하기
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const CareSection = () => {
    const [activeTab, setActiveTab] = useState('records');

    return (
      <div className="space-y-6">
        <div className="flex gap-2 border-b border-gray-200 overflow-x-auto">
          {['records', 'prescriptions', 'insurance', 'family', 'rewards'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-colors relative whitespace-nowrap ${
                activeTab === tab ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'records' ? '진료 기록' : 
               tab === 'prescriptions' ? '처방전' : 
               tab === 'insurance' ? '보험 청구' :
               tab === 'family' ? '가족 케어' :
               '리워드'}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
            </button>
          ))}
        </div>

        {activeTab === 'records' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">진료 기록</h2>
              <button 
                onClick={() => setShowRecordModal(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                새 기록 추가
              </button>
            </div>

            <div className="space-y-4">
              {medicalRecords.map(record => (
                <div key={record.id} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-lg font-bold mb-1">{record.diagnosis}</p>
                      <p className="text-sm text-gray-600">{record.hospital} - {record.doctor} 의사</p>
                    </div>
                    <span className="text-sm text-gray-500">{record.date}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Pill className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">처방약</p>
                        <p className="text-sm text-gray-600">{record.prescription}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      상세보기
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'prescriptions' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">처방전 관리</h2>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">현재 복용 중인 약</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">활성</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: '아모시실린 500mg', schedule: '1일 3회, 식후 30분', remaining: '7일 남음', total: '총 14일' },
                  { name: '이부프로펜 400mg', schedule: '1일 2회, 필요시', remaining: '10알 남음', total: '총 20알' }
                ].map((med, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Pill className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium">{med.name}</p>
                        <p className="text-sm text-gray-600">{med.schedule}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{med.remaining}</p>
                      <p className="text-xs text-gray-500">{med.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">복용 알림</h3>
              <div className="space-y-3">
                {[
                  { label: '아침 복용 시간', time: '오전 8:00' },
                  { label: '점심 복용 시간', time: '오후 12:30' }
                ].map((alarm, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium">{alarm.label}</p>
                        <p className="text-sm text-gray-600">{alarm.time}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'insurance' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">보험 청구 내역</h2>
              <button 
                onClick={() => setShowClaimModal(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                청구 신청
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm opacity-90 mb-1">총 청구 금액</p>
                  <p className="text-3xl font-bold">₩{insuranceClaims.reduce((sum, claim) => sum + claim.claimed, 0).toLocaleString()}</p>
                </div>
                <Shield className="w-12 h-12 opacity-80" />
              </div>
              <p className="text-sm opacity-90">이번 달 총 {insuranceClaims.length}건 청구</p>
            </div>

            <div className="space-y-4">
              {insuranceClaims.map(claim => (
                <div key={claim.id} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-bold text-lg">{claim.hospital}</p>
                      <p className="text-sm text-gray-600">진료일: {claim.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      claim.status === '승인' 
                        ? 'bg-green-100 text-green-700'
                        : claim.status === '처리중'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {claim.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">총 진료비</p>
                      <p className="text-lg font-bold">₩{claim.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">청구 금액</p>
                      <p className="text-lg font-bold text-blue-600">₩{claim.claimed.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <FileCheck className="w-4 h-4" />
                    <span>청구일: {claim.claimDate}</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      상세보기
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'family' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">가족 건강 관리</h3>
                  <p className="text-sm opacity-90">부모님의 건강을 스마트하게 관리하세요</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">관리 중인 가족</h3>
              <div className="space-y-4">
                {familyMembers.map(member => (
                  <div key={member.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-pink-500 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-pink-600" />
                        </div>
                        <div>
                          <p className="font-bold">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.relation} • {member.age}세</p>
                          <p className="text-sm text-gray-600">{member.phone}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        연결됨
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button 
                        onClick={() => handleFamilyAppointment(member)}
                        className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100 transition-colors flex items-center justify-center gap-1"
                      >
                        <Calendar className="w-4 h-4" />
                        예약
                      </button>
                      <button 
                        onClick={() => handleFamilyRecords(member)}
                        className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm hover:bg-green-100 transition-colors flex items-center justify-center gap-1"
                      >
                        <FileText className="w-4 h-4" />
                        기록
                      </button>
                      <button 
                        onClick={() => handleFamilyShare(member)}
                        className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm hover:bg-purple-100 transition-colors flex items-center justify-center gap-1"
                      >
                        <Share2 className="w-4 h-4" />
                        공유
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-pink-500 hover:text-pink-600 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                가족 구성원 추가
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">편리한 기능</h3>
              <div className="space-y-3">
                <button 
                  onClick={handleBulkDownload}
                  className="w-full p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg text-left hover:from-blue-100 hover:to-cyan-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileDown className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">진료기록 일괄 다운로드</p>
                      <p className="text-sm text-gray-600">가족 구성원의 모든 진료 기록을 PDF로 저장</p>
                    </div>
                  </div>
                </button>

                <button 
                  onClick={handleProxyAppointment}
                  className="w-full p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg text-left hover:from-green-100 hover:to-emerald-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">대리 예약 관리</p>
                      <p className="text-sm text-gray-600">부모님 대신 병원 예약 및 일정 관리</p>
                    </div>
                  </div>
                </button>

                <button 
                  onClick={handleMedicationReminder}
                  className="w-full p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg text-left hover:from-purple-100 hover:to-pink-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Bell className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900">약 복용 알림 설정</p>
                      <p className="text-sm text-gray-600">부모님께 복약 알림 자동 전송</p>
                    </div>
                  </div>
                </button>

                <button 
                  onClick={handleInsuranceAssist}
                  className="w-full p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg text-left hover:from-orange-100 hover:to-amber-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-orange-600" />
                    <div>
                      <p className="font-medium text-gray-900">보험 청구 대행</p>
                      <p className="text-sm text-gray-600">복잡한 보험 청구 절차를 대신 처리</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-pink-50 rounded-lg p-4">
              <p className="text-sm text-pink-900 font-medium mb-2">
                ❤️ 가족 케어 안내
              </p>
              <p className="text-sm text-pink-800 mb-3">
                가족 구성원을 추가하면 진료 예약, 기록 관리, 보험 청구 등을 
                대신 처리할 수 있습니다. 건강 정보는 안전하게 암호화되어 보호됩니다.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-xs text-gray-700 font-medium mb-2">
                ⚖️ 법적 고지사항
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                본 가족 케어 서비스는 보호자가 피보호자를 대신하여 의료 서비스를 관리하는 것을 돕기 위한 편의 기능입니다. 
                대리 예약 및 진료 기록 관리 등 모든 행위에 대한 법적 책임은 서비스 사용자에게 있으며, 
                의료법 및 개인정보보호법 등 관련 법규를 준수해야 합니다. 
                의료 행위에 대한 대리 동의는 법적으로 제한될 수 있으므로, 
                중요한 의료 결정은 반드시 본인의 동의를 받으시기 바랍니다.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-bold">건강 리워드</h3>
                  <p className="text-sm opacity-90">건강관리하고 포인트 받아가세요!</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm opacity-90">현재 등급</p>
                  <span className="px-3 py-1 bg-white/30 backdrop-blur rounded-full text-sm font-bold">
                    {rewardsData.level}
                  </span>
                </div>
                <p className="text-3xl font-bold mb-3">{rewardsData.totalPoints.toLocaleString()}P</p>
                <div className="w-full bg-white/30 rounded-full h-2 mb-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all"
                    style={{ 
                      width: `${((rewardsData.totalPoints % 1000) / 10)}%` 
                    }}
                  />
                </div>
                <p className="text-xs opacity-90">
                  {rewardsData.nextLevel} 등급까지 {rewardsData.pointsToNextLevel}P 남음
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" />
                주간 미션
              </h3>
              <div className="space-y-3">
                {rewardsData.weeklyMissions.map(mission => (
                  <div key={mission.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <p className="font-medium">{mission.title}</p>
                        <p className="text-sm text-gray-600">
                          {mission.progress}/{mission.total} 완료
                        </p>
                      </div>
                      <div className="text-right">
                        {mission.completed ? (
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            완료
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                            +{mission.points}P
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all ${
                          mission.completed ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${(mission.progress / mission.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-500" />
                달성한 업적
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {rewardsData.achievements.map(achievement => (
                  <div 
                    key={achievement.id} 
                    className={`border-2 rounded-lg p-4 text-center ${
                      achievement.completed
                        ? 'border-yellow-400 bg-yellow-50'
                        : 'border-gray-200 bg-gray-50 opacity-50'
                    }`}
                  >
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <p className="font-bold text-sm mb-1">{achievement.name}</p>
                    <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                      +{achievement.points}P
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-red-500" />
                나의 혜택
              </h3>
              <div className="space-y-3">
                {rewardsData.benefits.map(benefit => (
                  <div key={benefit.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{benefit.icon}</div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{benefit.title}</p>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                      {benefit.active && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium whitespace-nowrap">
                          사용가능
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
              <p className="text-sm text-purple-900 font-medium mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                포인트를 더 모으는 방법
              </p>
              <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
                <li>매일 건강 데이터 기록하기 (+10P)</li>
                <li>정기 검진 받고 기록하기 (+100P)</li>
                <li>추천한 식단 7일 달성하기 (+200P)</li>
                <li>친구 초대하기 (+500P)</li>
                <li>건강 목표 달성하기 (+300P)</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  const ProfileSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <User className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{userProfile.name}</h2>
            <p className="opacity-90">{userProfile.age}세 • {userProfile.bloodType}형</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <p className="text-sm opacity-90">키</p>
            <p className="text-xl font-bold">{userProfile.height}cm</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <p className="text-sm opacity-90">몸무게</p>
            <p className="text-xl font-bold">{userProfile.weight}kg</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4">건강 정보</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">알레르기</p>
            <div className="flex flex-wrap gap-2">
              {userProfile.allergies.map((allergy, idx) => (
                <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
                  {allergy}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">만성 질환</p>
            <div className="flex flex-wrap gap-2">
              {userProfile.chronicConditions.map((condition, idx) => (
                <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">
                  {condition}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">비상 연락처</p>
            <p className="font-medium">{userProfile.emergencyContact}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {[
          { icon: User, label: '개인정보 수정' },
          { icon: Bell, label: '알림 설정' },
          { icon: Shield, label: '개인정보 보호' },
          { icon: FileText, label: '이용약관' },
          { icon: Settings, label: '앱 설정' }
        ].map((item, idx) => (
          <button key={idx} className={`w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${idx > 0 ? 'border-t border-gray-100' : ''}`}>
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-gray-600" />
              <span className="font-medium">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>

      <button className="w-full px-6 py-4 bg-white rounded-xl shadow-sm hover:bg-red-50 transition-colors flex items-center justify-center gap-2 text-red-600 font-medium">
        <LogOut className="w-5 h-5" />
        로그아웃
      </button>

      <div className="text-center text-sm text-gray-500">
        <p>Healthcare App v2.0.0</p>
        <p>© 2024 All rights reserved</p>
      </div>
    </div>
  );

  const DiagnosisModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowDiagnosisModal(false)}>
      <div className="bg-white rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">AI 검사 스캔</h3>
          <button onClick={() => setShowDiagnosisModal(false)}>
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center bg-purple-50">
            <Camera className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <p className="text-lg font-medium text-purple-900 mb-2">검사 키트를 스캔하세요</p>
            <p className="text-sm text-purple-700">
              혈액검사 또는 소변검사 키트를 카메라에 맞춰주세요
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-900 font-medium mb-2">📱 사용 방법</p>
            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
              <li>검사 키트를 평평한 곳에 놓으세요</li>
              <li>조명이 밝은 곳에서 촬영하세요</li>
              <li>키트 전체가 화면에 들어오도록 하세요</li>
            </ol>
          </div>

          <button className="w-full px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium flex items-center justify-center gap-2">
            <Camera className="w-5 h-5" />
            카메라 시작하기
          </button>
        </div>
      </div>
    </div>
  );

  const AppointmentModal = () => {
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowAppointmentModal(false)}>
        <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold">진료 예약</h3>
              {selectedFamilyMember && (
                <p className="text-sm text-gray-600">{selectedFamilyMember.name}님 ({selectedFamilyMember.relation})</p>
              )}
            </div>
            <button onClick={() => setShowAppointmentModal(false)}>
              <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
            </button>
          </div>

          {selectedHospital && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="font-bold text-lg mb-1">{selectedHospital.name}</p>
              <p className="text-sm text-gray-600">{selectedHospital.address}</p>
              {selectedDoctor && (
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <p className="text-sm font-medium text-blue-900">선택된 의료진</p>
                  <p className="text-sm text-blue-700">{selectedDoctor.name} 전문의 ({selectedDoctor.specialty})</p>
                  <p className="text-xs text-blue-600 mt-1">전문분야: {selectedDoctor.expertise.join(', ')}</p>
                  <p className="text-xs text-green-600 mt-1">성공률: {selectedDoctor.successRate}%</p>
                </div>
              )}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">진료과</label>
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">진료과를 선택하세요</option>
                {selectedHospital?.departments.map((dept, idx) => (
                  <option key={idx} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">날짜</label>
              <input 
                type="date" 
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">시간</label>
              <select
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">시간을 선택하세요</option>
                <option value="09:00">오전 9:00</option>
                <option value="10:00">오전 10:00</option>
                <option value="11:00">오전 11:00</option>
                <option value="14:00">오후 2:00</option>
                <option value="15:00">오후 3:00</option>
                <option value="16:00">오후 4:00</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">증상 (선택사항)</label>
              <textarea 
                placeholder="진료받고 싶은 증상을 입력하세요"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              onClick={() => {
                const patientName = selectedFamilyMember ? selectedFamilyMember.name : userProfile.name;
                alert(`예약이 완료되었습니다!\n\n환자: ${patientName}\n병원: ${selectedHospital?.name}${selectedDoctor ? `\n의사: ${selectedDoctor.name} 전문의` : ''}\n날짜: ${appointmentDate}\n시간: ${appointmentTime}`);
                setShowAppointmentModal(false);
                setSelectedFamilyMember(null);
              }}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              예약 확정하기
            </button>
          </div>
        </div>
      </div>
    );
  };

  const RecordModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowRecordModal(false)}>
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">진료 기록 추가</h3>
          <button onClick={() => setShowRecordModal(false)}>
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">병원</label>
            <input 
              type="text" 
              placeholder="병원명을 입력하세요"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">진료일</label>
            <input 
              type="date" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">진단명</label>
            <input 
              type="text" 
              placeholder="진단명을 입력하세요"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">처방약</label>
            <textarea 
              placeholder="처방받은 약을 입력하세요"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">파일 첨부</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">진료 기록서를 업로드하세요</p>
            </div>
          </div>
          <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
            저장하기
          </button>
        </div>
      </div>
    </div>
  );

  const ClaimModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowClaimModal(false)}>
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">보험 청구 신청</h3>
          <button onClick={() => setShowClaimModal(false)}>
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">병원</label>
            <input 
              type="text" 
              placeholder="병원명을 입력하세요"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">진료일</label>
            <input 
              type="date" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">총 진료비</label>
            <input 
              type="number" 
              placeholder="진료비를 입력하세요"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">청구 금액</label>
            <input 
              type="number" 
              placeholder="청구할 금액을 입력하세요"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">증빙 서류</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">진료비 영수증을 업로드하세요</p>
            </div>
          </div>
          <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
            청구 신청하기
          </button>
        </div>
      </div>
    </div>
  );

  const FamilyRecordsModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowFamilyRecordsModal(false)}>
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold">{selectedFamilyMember?.name}님 진료 기록</h3>
            <p className="text-sm text-gray-600">{selectedFamilyMember?.relation} • {selectedFamilyMember?.age}세</p>
          </div>
          <button onClick={() => setShowFamilyRecordsModal(false)}>
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        <div className="space-y-4">
          {selectedFamilyMember?.recentRecords?.map((record, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-lg">{record.diagnosis}</p>
                  <p className="text-sm text-gray-600">{record.hospital}</p>
                  <p className="text-sm text-gray-600">{record.doctor} 의사</p>
                </div>
                <span className="text-sm text-gray-500">{record.date}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm">
                  상세보기
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const FamilyShareModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowFamilyShareModal(false)}>
      <div className="bg-white rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold">건강정보 공유</h3>
            <p className="text-sm text-gray-600">{selectedFamilyMember?.name}님</p>
          </div>
          <button onClick={() => setShowFamilyShareModal(false)}>
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-pink-50 rounded-lg p-4">
            <p className="text-sm text-pink-900 font-medium mb-2">공유할 정보 선택</p>
            <div className="space-y-2">
              {['진료 기록', '검사 결과', '처방전', '예약 일정'].map((item, idx) => (
                <label key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 text-pink-600" defaultChecked />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">공유 기간</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option>1주일</option>
              <option>1개월</option>
              <option>3개월</option>
              <option>무제한</option>
            </select>
          </div>

          <button 
            onClick={() => {
              alert(`${selectedFamilyMember?.name}님의 건강 정보 공유 링크가 생성되었습니다!\n\n공유 링크: https://healthcare.app/share/abc123\n\n이 링크를 통해 선택한 정보를 안전하게 공유할 수 있습니다.`);
              setShowFamilyShareModal(false);
            }}
            className="w-full px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            공유 링크 생성
          </button>
        </div>
      </div>
    </div>
  );

  const MedicationReminderModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowMedicationReminderModal(false)}>
      <div className="bg-white rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">약 복용 알림 설정</h3>
          <button onClick={() => setShowMedicationReminderModal(false)}>
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">가족 구성원 선택</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
              {familyMembers.map(member => (
                <option key={member.id} value={member.id}>{member.name} ({member.relation})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">약 이름</label>
            <input 
              type="text" 
              placeholder="약 이름을 입력하세요"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">복용 시간</label>
              <input 
                type="time" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">알림 방법</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>문자 메시지</option>
                <option>앱 알림</option>
                <option>전화</option>
              </select>
            </div>
          </div>

          <button 
            onClick={() => {
              alert('약 복용 알림이 설정되었습니다!\n\n설정된 시간에 자동으로 알림이 전송됩니다.');
              setShowMedicationReminderModal(false);
            }}
            className="w-full px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
          >
            알림 설정하기
          </button>
        </div>
      </div>
    </div>
  );

  const InsuranceAssistModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowInsuranceAssistModal(false)}>
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">보험 청구 대행</h3>
          <button onClick={() => setShowInsuranceAssistModal(false)}>
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">가족 구성원</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
              {familyMembers.map(member => (
                <option key={member.id} value={member.id}>{member.name} ({member.relation})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">병원</label>
            <input 
              type="text" 
              placeholder="병원명을 입력하세요"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">진료일</label>
            <input 
              type="date" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">총 진료비</label>
            <input 
              type="number" 
              placeholder="진료비를 입력하세요"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">증빙 서류</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">진료비 영수증을 업로드하세요</p>
            </div>
          </div>

          <button 
            onClick={() => {
              alert('보험 청구 대행이 신청되었습니다!\n\n담당자가 서류를 검토한 후 보험사에 제출해드립니다.\n진행 상황은 알림으로 안내드립니다.');
              setShowInsuranceAssistModal(false);
            }}
            className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            대행 신청하기
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">HealthCare+</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 pb-24">
        {currentSection === 'home' && <HomeSection />}
        {currentSection === 'diagnosis' && <DiagnosisSection />}
        {currentSection === 'hospital' && <HospitalSection />}
        {currentSection === 'care' && <CareSection />}
        {currentSection === 'profile' && <ProfileSection />}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around items-center h-16">
            {[
              { id: 'home', icon: Heart, label: '홈' },
              { id: 'diagnosis', icon: Microscope, label: '진단' },
              { id: 'hospital', icon: Hospital, label: '병원' },
              { id: 'care', icon: FileText, label: '케어' },
              { id: 'profile', icon: User, label: '프로필' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                  currentSection === item.id ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {showAppointmentModal && <AppointmentModal />}
      {showRecordModal && <RecordModal />}
      {showClaimModal && <ClaimModal />}
      {showDiagnosisModal && <DiagnosisModal />}
      {showFamilyShareModal && <FamilyShareModal />}
      {showFamilyRecordsModal && <FamilyRecordsModal />}
      {showMedicationReminderModal && <MedicationReminderModal />}
      {showInsuranceAssistModal && <InsuranceAssistModal />}
    </div>
  );
}