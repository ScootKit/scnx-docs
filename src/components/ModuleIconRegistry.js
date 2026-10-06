// All Font Awesome icons a module can ask for, by the name the SCNX API uses. This is a big file (every icon is
// its SVG path), so it is not imported directly: ModuleIcon.js loads it as a separate chunk, which keeps it out of
// main.js on the pages that do not show module icons.
//
// Import every icon from its own file (".../faName"), never from the package root. The package root is one module
// with all icons in it, and because other components import single icons from it, webpack keeps that whole module
// in main.js, including every icon used here.
//
// To support a new icon: add an import below and an entry in "icons".
import {faArrowUp19} from '@fortawesome/pro-solid-svg-icons/faArrowUp19';
import {faBadgeCheck} from '@fortawesome/pro-solid-svg-icons/faBadgeCheck';
import {faBank} from '@fortawesome/pro-solid-svg-icons/faBank';
import {faBell} from '@fortawesome/pro-solid-svg-icons/faBell';
import {faBorderAll} from '@fortawesome/pro-solid-svg-icons/faBorderAll';
import {faBox} from '@fortawesome/pro-solid-svg-icons/faBox';
import {faCalendar} from '@fortawesome/pro-solid-svg-icons/faCalendar';
import {faCalendarDays} from '@fortawesome/pro-solid-svg-icons/faCalendarDays';
import {faCheckToSlot} from '@fortawesome/pro-solid-svg-icons/faCheckToSlot';
import {faCircleChevronUp} from '@fortawesome/pro-solid-svg-icons/faCircleChevronUp';
import {faCircleInfo} from '@fortawesome/pro-solid-svg-icons/faCircleInfo';
import {faClockRotateLeft} from '@fortawesome/pro-solid-svg-icons/faClockRotateLeft';
import {faCode} from '@fortawesome/pro-solid-svg-icons/faCode';
import {faCodeBranch} from '@fortawesome/pro-solid-svg-icons/faCodeBranch';
import {faCommentDots} from '@fortawesome/pro-solid-svg-icons/faCommentDots';
import {faComments as faSolidComments} from '@fortawesome/pro-solid-svg-icons/faComments';
import {faDoorOpen} from '@fortawesome/pro-solid-svg-icons/faDoorOpen';
import {faFaceSmile} from '@fortawesome/pro-solid-svg-icons/faFaceSmile';
import {faFileCirclePlus} from '@fortawesome/pro-solid-svg-icons/faFileCirclePlus';
import {faFireFlameCurved} from '@fortawesome/pro-solid-svg-icons/faFireFlameCurved';
import {faFolder} from '@fortawesome/pro-solid-svg-icons/faFolder';
import {faGears} from '@fortawesome/pro-solid-svg-icons/faGears';
import {faHandScissors} from '@fortawesome/pro-solid-svg-icons/faHandScissors';
import {faHashtag} from '@fortawesome/pro-solid-svg-icons/faHashtag';
import {faHourglassHalf} from '@fortawesome/pro-solid-svg-icons/faHourglassHalf';
import {faLaughSquint} from '@fortawesome/pro-solid-svg-icons/faLaughSquint';
import {faListDropdown} from '@fortawesome/pro-solid-svg-icons/faListDropdown';
import {faLock} from '@fortawesome/pro-solid-svg-icons/faLock';
import {faMessages} from '@fortawesome/pro-solid-svg-icons/faMessages';
import {faMousePointer} from '@fortawesome/pro-solid-svg-icons/faMousePointer';
import {faPlus} from '@fortawesome/pro-solid-svg-icons/faPlus';
import {faPuzzlePiece} from '@fortawesome/pro-solid-svg-icons/faPuzzlePiece';
import {faRankingStar} from '@fortawesome/pro-solid-svg-icons/faRankingStar';
import {faReel} from '@fortawesome/pro-solid-svg-icons/faReel';
import {faRightFromBracket} from '@fortawesome/pro-solid-svg-icons/faRightFromBracket';
import {faRobot} from '@fortawesome/pro-solid-svg-icons/faRobot';
import {faRss} from '@fortawesome/pro-solid-svg-icons/faRss';
import {faShield} from '@fortawesome/pro-solid-svg-icons/faShield';
import {faSignInAlt} from '@fortawesome/pro-solid-svg-icons/faSignInAlt';
import {faSlashForward} from '@fortawesome/pro-solid-svg-icons/faSlashForward';
import {faStar} from '@fortawesome/pro-solid-svg-icons/faStar';
import {faStream} from '@fortawesome/pro-solid-svg-icons/faStream';
import {faTableCells} from '@fortawesome/pro-solid-svg-icons/faTableCells';
import {faTerminal} from '@fortawesome/pro-solid-svg-icons/faTerminal';
import {faThumbtack} from '@fortawesome/pro-solid-svg-icons/faThumbtack';
import {faTools} from '@fortawesome/pro-solid-svg-icons/faTools';
import {faUser} from '@fortawesome/pro-solid-svg-icons/faUser';
import {faUsers} from '@fortawesome/pro-solid-svg-icons/faUsers';
import {faWebhook} from '@fortawesome/pro-solid-svg-icons/faWebhook';
import {faCreditCard} from '@fortawesome/pro-solid-svg-icons/faCreditCard';
import {faServer} from '@fortawesome/pro-solid-svg-icons/faServer';
import {faEnvelope} from '@fortawesome/pro-solid-svg-icons/faEnvelope';
import {faEnvelopeOpen} from '@fortawesome/pro-solid-svg-icons/faEnvelopeOpen';
import {faBug} from '@fortawesome/pro-solid-svg-icons/faBug';
import {faLifeRing} from '@fortawesome/pro-solid-svg-icons/faLifeRing';
import {faHeadset} from '@fortawesome/pro-solid-svg-icons/faHeadset';
import {faReceipt} from '@fortawesome/pro-solid-svg-icons/faReceipt';
import {faWrench} from '@fortawesome/pro-solid-svg-icons/faWrench';
import {faCircleQuestion} from '@fortawesome/pro-solid-svg-icons/faCircleQuestion';
import {faBullseye} from '@fortawesome/pro-solid-svg-icons/faBullseye';
import {faDatabase} from '@fortawesome/pro-solid-svg-icons/faDatabase';
import {faKey} from '@fortawesome/pro-solid-svg-icons/faKey';
import {faGavel} from '@fortawesome/pro-solid-svg-icons/faGavel';
import {faBan} from '@fortawesome/pro-solid-svg-icons/faBan';
import {faMoneyBill} from '@fortawesome/pro-solid-svg-icons/faMoneyBill';
import {faScaleBalanced} from '@fortawesome/pro-solid-svg-icons/faScaleBalanced';
import {faFileLines} from '@fortawesome/pro-solid-svg-icons/faFileLines';
import {faHandshake} from '@fortawesome/pro-solid-svg-icons/faHandshake';
import {faChartLine} from '@fortawesome/pro-solid-svg-icons/faChartLine';
import {faGlobe} from '@fortawesome/pro-solid-svg-icons/faGlobe';
import {faMicrophone} from '@fortawesome/pro-solid-svg-icons/faMicrophone';
import {faMusic} from '@fortawesome/pro-solid-svg-icons/faMusic';
import {faGamepad} from '@fortawesome/pro-solid-svg-icons/faGamepad';
import {faShoppingCart} from '@fortawesome/pro-solid-svg-icons/faShoppingCart';
import {faCrown} from '@fortawesome/pro-solid-svg-icons/faCrown';
import {faMedal} from '@fortawesome/pro-solid-svg-icons/faMedal';
import {faTrophy} from '@fortawesome/pro-solid-svg-icons/faTrophy';
import {faBookOpen} from '@fortawesome/pro-solid-svg-icons/faBookOpen';
import {faGraduationCap} from '@fortawesome/pro-solid-svg-icons/faGraduationCap';
import {faMapMarkerAlt} from '@fortawesome/pro-solid-svg-icons/faMapMarkerAlt';
import {faLink} from '@fortawesome/pro-solid-svg-icons/faLink';
import {faShareNodes} from '@fortawesome/pro-solid-svg-icons/faShareNodes';
import {faFilter} from '@fortawesome/pro-solid-svg-icons/faFilter';
import {faMagnifyingGlass} from '@fortawesome/pro-solid-svg-icons/faMagnifyingGlass';
import {faChartPie} from '@fortawesome/pro-solid-svg-icons/faChartPie';
import {faChartBar} from '@fortawesome/pro-solid-svg-icons/faChartBar';
import {faBolt} from '@fortawesome/pro-solid-svg-icons/faBolt';
import {faWandMagicSparkles} from '@fortawesome/pro-solid-svg-icons/faWandMagicSparkles';
import {faShieldHalved} from '@fortawesome/pro-solid-svg-icons/faShieldHalved';
import {faUserShield} from '@fortawesome/pro-solid-svg-icons/faUserShield';
import {faLanguage} from '@fortawesome/pro-solid-svg-icons/faLanguage';
import {faEarthAmericas} from '@fortawesome/pro-solid-svg-icons/faEarthAmericas';
import {faPaintbrush} from '@fortawesome/pro-solid-svg-icons/faPaintbrush';
import {faObjectGroup} from '@fortawesome/pro-solid-svg-icons/faObjectGroup';
import {faLayerGroup} from '@fortawesome/pro-solid-svg-icons/faLayerGroup';
import {faSitemap} from '@fortawesome/pro-solid-svg-icons/faSitemap';
import {faNetworkWired} from '@fortawesome/pro-solid-svg-icons/faNetworkWired';
import {faCloud} from '@fortawesome/pro-solid-svg-icons/faCloud';
import {faDownload} from '@fortawesome/pro-solid-svg-icons/faDownload';
import {faUpload} from '@fortawesome/pro-solid-svg-icons/faUpload';
import {faFolderOpen} from '@fortawesome/pro-solid-svg-icons/faFolderOpen';
import {faNewspaper} from '@fortawesome/pro-solid-svg-icons/faNewspaper';
import {faBlog} from '@fortawesome/pro-solid-svg-icons/faBlog';
import {faPenNib} from '@fortawesome/pro-solid-svg-icons/faPenNib';
import {faAt} from '@fortawesome/pro-solid-svg-icons/faAt';
import {faPhone} from '@fortawesome/pro-solid-svg-icons/faPhone';
import {faLocationDot} from '@fortawesome/pro-solid-svg-icons/faLocationDot';
import {faHouse} from '@fortawesome/pro-solid-svg-icons/faHouse';
import {faStore} from '@fortawesome/pro-solid-svg-icons/faStore';
import {faCartShopping} from '@fortawesome/pro-solid-svg-icons/faCartShopping';
import {faPercent} from '@fortawesome/pro-solid-svg-icons/faPercent';
import {faCoins} from '@fortawesome/pro-solid-svg-icons/faCoins';
import {faWallet} from '@fortawesome/pro-solid-svg-icons/faWallet';
import {faChartSimple} from '@fortawesome/pro-solid-svg-icons/faChartSimple';
import {faArrowTrendUp} from '@fortawesome/pro-solid-svg-icons/faArrowTrendUp';
import {faGauge} from '@fortawesome/pro-solid-svg-icons/faGauge';
import {faSpinner} from '@fortawesome/pro-solid-svg-icons/faSpinner';
import {faCircleCheck} from '@fortawesome/pro-solid-svg-icons/faCircleCheck';
import {faCircleXmark} from '@fortawesome/pro-solid-svg-icons/faCircleXmark';
import {faEye} from '@fortawesome/pro-solid-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/pro-solid-svg-icons/faEyeSlash';
import {faBellOn} from '@fortawesome/pro-solid-svg-icons/faBellOn';
import {faHeart} from '@fortawesome/pro-solid-svg-icons/faHeart';
import {faThumbsUp} from '@fortawesome/pro-solid-svg-icons/faThumbsUp';
import {faAward} from '@fortawesome/pro-solid-svg-icons/faAward';
import {faPartyHorn} from '@fortawesome/pro-solid-svg-icons/faPartyHorn';
import {faSparkles} from '@fortawesome/pro-solid-svg-icons/faSparkles';
import {faMagic} from '@fortawesome/pro-solid-svg-icons/faMagic';
import {faInbox} from '@fortawesome/pro-solid-svg-icons/faInbox';
import {faReply} from '@fortawesome/pro-solid-svg-icons/faReply';
import {faReplyAll} from '@fortawesome/pro-solid-svg-icons/faReplyAll';
import {faPaperPlane} from '@fortawesome/pro-solid-svg-icons/faPaperPlane';
import {faEnvelopesBulk} from '@fortawesome/pro-solid-svg-icons/faEnvelopesBulk';
import {faFax} from '@fortawesome/pro-solid-svg-icons/faFax';
import {faHammer} from '@fortawesome/pro-solid-svg-icons/faHammer';
import {faShieldExclamation} from '@fortawesome/pro-solid-svg-icons/faShieldExclamation';
import {faUserSlash} from '@fortawesome/pro-solid-svg-icons/faUserSlash';
import {faUserXmark} from '@fortawesome/pro-solid-svg-icons/faUserXmark';
import {faUserCheck} from '@fortawesome/pro-solid-svg-icons/faUserCheck';
import {faUserLock} from '@fortawesome/pro-solid-svg-icons/faUserLock';
import {faHandMiddleFinger} from '@fortawesome/pro-solid-svg-icons/faHandMiddleFinger';
import {faOctagonExclamation} from '@fortawesome/pro-solid-svg-icons/faOctagonExclamation';
import {faCamera} from '@fortawesome/pro-solid-svg-icons/faCamera';
import {faVideo} from '@fortawesome/pro-solid-svg-icons/faVideo';
import {faFilm} from '@fortawesome/pro-solid-svg-icons/faFilm';
import {faImages} from '@fortawesome/pro-solid-svg-icons/faImages';
import {faPhotoFilm} from '@fortawesome/pro-solid-svg-icons/faPhotoFilm';
import {faVolumeOff} from '@fortawesome/pro-solid-svg-icons/faVolumeOff';
import {faVolumeLow} from '@fortawesome/pro-solid-svg-icons/faVolumeLow';
import {faVolumeXmark} from '@fortawesome/pro-solid-svg-icons/faVolumeXmark';
import {faPodcast} from '@fortawesome/pro-solid-svg-icons/faPodcast';
import {faRadio} from '@fortawesome/pro-solid-svg-icons/faRadio';
import {faHeadphones} from '@fortawesome/pro-solid-svg-icons/faHeadphones';
import {faArrowRight} from '@fortawesome/pro-solid-svg-icons/faArrowRight';
import {faArrowLeft} from '@fortawesome/pro-solid-svg-icons/faArrowLeft';
import {faArrowUp} from '@fortawesome/pro-solid-svg-icons/faArrowUp';
import {faArrowDown} from '@fortawesome/pro-solid-svg-icons/faArrowDown';
import {faAnglesRight} from '@fortawesome/pro-solid-svg-icons/faAnglesRight';
import {faAnglesLeft} from '@fortawesome/pro-solid-svg-icons/faAnglesLeft';
import {faChevronRight} from '@fortawesome/pro-solid-svg-icons/faChevronRight';
import {faChevronLeft} from '@fortawesome/pro-solid-svg-icons/faChevronLeft';
import {faArrowsRotate} from '@fortawesome/pro-solid-svg-icons/faArrowsRotate';
import {faRotate} from '@fortawesome/pro-solid-svg-icons/faRotate';
import {faExpand} from '@fortawesome/pro-solid-svg-icons/faExpand';
import {faCompress} from '@fortawesome/pro-solid-svg-icons/faCompress';
import {faMaximize} from '@fortawesome/pro-solid-svg-icons/faMaximize';
import {faMinimize} from '@fortawesome/pro-solid-svg-icons/faMinimize';
import {faUpRightAndDownLeftFromCenter} from '@fortawesome/pro-solid-svg-icons/faUpRightAndDownLeftFromCenter';
import {faFile} from '@fortawesome/pro-solid-svg-icons/faFile';
import {faFilePdf} from '@fortawesome/pro-solid-svg-icons/faFilePdf';
import {faFileImage} from '@fortawesome/pro-solid-svg-icons/faFileImage';
import {faFileCode} from '@fortawesome/pro-solid-svg-icons/faFileCode';
import {faFileZipper} from '@fortawesome/pro-solid-svg-icons/faFileZipper';
import {faFileExport} from '@fortawesome/pro-solid-svg-icons/faFileExport';
import {faFileImport} from '@fortawesome/pro-solid-svg-icons/faFileImport';
import {faFileArrowUp} from '@fortawesome/pro-solid-svg-icons/faFileArrowUp';
import {faFileArrowDown} from '@fortawesome/pro-solid-svg-icons/faFileArrowDown';
import {faFileCsv} from '@fortawesome/pro-solid-svg-icons/faFileCsv';
import {faFileExcel} from '@fortawesome/pro-solid-svg-icons/faFileExcel';
import {faFileWord} from '@fortawesome/pro-solid-svg-icons/faFileWord';
import {faCopy} from '@fortawesome/pro-solid-svg-icons/faCopy';
import {faPaste} from '@fortawesome/pro-solid-svg-icons/faPaste';
import {faScissors} from '@fortawesome/pro-solid-svg-icons/faScissors';
import {faTrash} from '@fortawesome/pro-solid-svg-icons/faTrash';
import {faClock} from '@fortawesome/pro-solid-svg-icons/faClock';
import {faStopwatch} from '@fortawesome/pro-solid-svg-icons/faStopwatch';
import {faTimer} from '@fortawesome/pro-solid-svg-icons/faTimer';
import {faCalendarCheck} from '@fortawesome/pro-solid-svg-icons/faCalendarCheck';
import {faCalendarPlus} from '@fortawesome/pro-solid-svg-icons/faCalendarPlus';
import {faCalendarMinus} from '@fortawesome/pro-solid-svg-icons/faCalendarMinus';
import {faCalendarXmark} from '@fortawesome/pro-solid-svg-icons/faCalendarXmark';
import {faFolderPlus} from '@fortawesome/pro-solid-svg-icons/faFolderPlus';
import {faFolderMinus} from '@fortawesome/pro-solid-svg-icons/faFolderMinus';
import {faFolderTree} from '@fortawesome/pro-solid-svg-icons/faFolderTree';
import {faBoxArchive} from '@fortawesome/pro-solid-svg-icons/faBoxArchive';
import {faBookmark} from '@fortawesome/pro-solid-svg-icons/faBookmark';
import {faTag} from '@fortawesome/pro-solid-svg-icons/faTag';
import {faList} from '@fortawesome/pro-solid-svg-icons/faList';
import {faListOl} from '@fortawesome/pro-solid-svg-icons/faListOl';
import {faListCheck} from '@fortawesome/pro-solid-svg-icons/faListCheck';
import {faTableList} from '@fortawesome/pro-solid-svg-icons/faTableList';
import {faGripVertical} from '@fortawesome/pro-solid-svg-icons/faGripVertical';
import {faSort} from '@fortawesome/pro-solid-svg-icons/faSort';
import {faSortUp} from '@fortawesome/pro-solid-svg-icons/faSortUp';
import {faSortDown} from '@fortawesome/pro-solid-svg-icons/faSortDown';
import {faGear} from '@fortawesome/pro-solid-svg-icons/faGear';
import {faSliders} from '@fortawesome/pro-solid-svg-icons/faSliders';
import {faToggleOn} from '@fortawesome/pro-solid-svg-icons/faToggleOn';
import {faToggleOff} from '@fortawesome/pro-solid-svg-icons/faToggleOff';
import {faEllipsis} from '@fortawesome/pro-solid-svg-icons/faEllipsis';
import {faEllipsisVertical} from '@fortawesome/pro-solid-svg-icons/faEllipsisVertical';
import {faBars} from '@fortawesome/pro-solid-svg-icons/faBars';
import {faCircleHalfStroke} from '@fortawesome/pro-solid-svg-icons/faCircleHalfStroke';
import {faFaceGrin} from '@fortawesome/pro-solid-svg-icons/faFaceGrin';
import {faFaceLaugh} from '@fortawesome/pro-solid-svg-icons/faFaceLaugh';
import {faFaceSadTear} from '@fortawesome/pro-solid-svg-icons/faFaceSadTear';
import {faFaceAngry} from '@fortawesome/pro-solid-svg-icons/faFaceAngry';
import {faFaceSurprise} from '@fortawesome/pro-solid-svg-icons/faFaceSurprise';
import {faFaceMeh} from '@fortawesome/pro-solid-svg-icons/faFaceMeh';
import {faHandsClapping} from '@fortawesome/pro-solid-svg-icons/faHandsClapping';
import {faFire} from '@fortawesome/pro-solid-svg-icons/faFire';
import {faCodeMerge} from '@fortawesome/pro-solid-svg-icons/faCodeMerge';
import {faCodePullRequest} from '@fortawesome/pro-solid-svg-icons/faCodePullRequest';
import {faCodeCommit} from '@fortawesome/pro-solid-svg-icons/faCodeCommit';
import {faCodeFork} from '@fortawesome/pro-solid-svg-icons/faCodeFork';
import {faBracketsCurly} from '@fortawesome/pro-solid-svg-icons/faBracketsCurly';
import {faMicrochip} from '@fortawesome/pro-solid-svg-icons/faMicrochip';
import {faCubes} from '@fortawesome/pro-solid-svg-icons/faCubes';
import {faPlug} from '@fortawesome/pro-solid-svg-icons/faPlug';
import {faBriefcase} from '@fortawesome/pro-solid-svg-icons/faBriefcase';
import {faBuilding} from '@fortawesome/pro-solid-svg-icons/faBuilding';
import {faIndustry} from '@fortawesome/pro-solid-svg-icons/faIndustry';
import {faLandmark} from '@fortawesome/pro-solid-svg-icons/faLandmark';
import {faScroll} from '@fortawesome/pro-solid-svg-icons/faScroll';
import {faStamp} from '@fortawesome/pro-solid-svg-icons/faStamp';
import {faSignature} from '@fortawesome/pro-solid-svg-icons/faSignature';
import {faFileContract} from '@fortawesome/pro-solid-svg-icons/faFileContract';
import {faFileInvoice} from '@fortawesome/pro-solid-svg-icons/faFileInvoice';
import {faFileInvoiceDollar} from '@fortawesome/pro-solid-svg-icons/faFileInvoiceDollar';
import {faSun} from '@fortawesome/pro-solid-svg-icons/faSun';
import {faMoon} from '@fortawesome/pro-solid-svg-icons/faMoon';
import {faCloudSun} from '@fortawesome/pro-solid-svg-icons/faCloudSun';
import {faCloudMoon} from '@fortawesome/pro-solid-svg-icons/faCloudMoon';
import {faSnowflake} from '@fortawesome/pro-solid-svg-icons/faSnowflake';
import {faDroplet} from '@fortawesome/pro-solid-svg-icons/faDroplet';
import {faLeaf} from '@fortawesome/pro-solid-svg-icons/faLeaf';
import {faTree} from '@fortawesome/pro-solid-svg-icons/faTree';
import {faSeedling} from '@fortawesome/pro-solid-svg-icons/faSeedling';
import {faFlower} from '@fortawesome/pro-solid-svg-icons/faFlower';
import {faHeartPulse} from '@fortawesome/pro-solid-svg-icons/faHeartPulse';
import {faStethoscope} from '@fortawesome/pro-solid-svg-icons/faStethoscope';
import {faSyringe} from '@fortawesome/pro-solid-svg-icons/faSyringe';
import {faPills} from '@fortawesome/pro-solid-svg-icons/faPills';
import {faShieldVirus} from '@fortawesome/pro-solid-svg-icons/faShieldVirus';
import {faVirusSlash} from '@fortawesome/pro-solid-svg-icons/faVirusSlash';
import {faQrcode} from '@fortawesome/pro-solid-svg-icons/faQrcode';
import {faBarcode} from '@fortawesome/pro-solid-svg-icons/faBarcode';
import {faFingerprint} from '@fortawesome/pro-solid-svg-icons/faFingerprint';
import {faRocket} from '@fortawesome/pro-solid-svg-icons/faRocket';
import {faPaperclip} from '@fortawesome/pro-solid-svg-icons/faPaperclip';
import {faMagnifyingGlassPlus} from '@fortawesome/pro-solid-svg-icons/faMagnifyingGlassPlus';
import {faMagnifyingGlassMinus} from '@fortawesome/pro-solid-svg-icons/faMagnifyingGlassMinus';
import {faWifi} from '@fortawesome/pro-solid-svg-icons/faWifi';
import {faSignal} from '@fortawesome/pro-solid-svg-icons/faSignal';
import {faBattery} from '@fortawesome/pro-solid-svg-icons/faBattery';
import {faPowerOff} from '@fortawesome/pro-solid-svg-icons/faPowerOff';
import {faDesktop} from '@fortawesome/pro-solid-svg-icons/faDesktop';
import {faMobile} from '@fortawesome/pro-solid-svg-icons/faMobile';
import {faTablet} from '@fortawesome/pro-solid-svg-icons/faTablet';
import {faLaptop} from '@fortawesome/pro-solid-svg-icons/faLaptop';
import {faPrint} from '@fortawesome/pro-solid-svg-icons/faPrint';
import {faKeyboard} from '@fortawesome/pro-solid-svg-icons/faKeyboard';
import {faChess} from '@fortawesome/pro-solid-svg-icons/faChess';
import {faChessPawn} from '@fortawesome/pro-solid-svg-icons/faChessPawn';
import {faChessKnight} from '@fortawesome/pro-solid-svg-icons/faChessKnight';
import {faChessRook} from '@fortawesome/pro-solid-svg-icons/faChessRook';
import {faChessBishop} from '@fortawesome/pro-solid-svg-icons/faChessBishop';
import {faChessKing} from '@fortawesome/pro-solid-svg-icons/faChessKing';
import {faChessQueen} from '@fortawesome/pro-solid-svg-icons/faChessQueen';
import {faChessBoard} from '@fortawesome/pro-solid-svg-icons/faChessBoard';
import {faPuzzle} from '@fortawesome/pro-solid-svg-icons/faPuzzle';
import {faDragon} from '@fortawesome/pro-solid-svg-icons/faDragon';
import {faGhost} from '@fortawesome/pro-solid-svg-icons/faGhost';
import {faHatWizard} from '@fortawesome/pro-solid-svg-icons/faHatWizard';
import {faDungeon} from '@fortawesome/pro-solid-svg-icons/faDungeon';
import {faWandSparkles} from '@fortawesome/pro-solid-svg-icons/faWandSparkles';
import {faDiceOne} from '@fortawesome/pro-solid-svg-icons/faDiceOne';
import {faDiceTwo} from '@fortawesome/pro-solid-svg-icons/faDiceTwo';
import {faDiceThree} from '@fortawesome/pro-solid-svg-icons/faDiceThree';
import {faDiceFour} from '@fortawesome/pro-solid-svg-icons/faDiceFour';
import {faDiceSix} from '@fortawesome/pro-solid-svg-icons/faDiceSix';
import {faJoystick} from '@fortawesome/pro-solid-svg-icons/faJoystick';
import {faDollarSign} from '@fortawesome/pro-solid-svg-icons/faDollarSign';
import {faEuroSign} from '@fortawesome/pro-solid-svg-icons/faEuroSign';
import {faYenSign} from '@fortawesome/pro-solid-svg-icons/faYenSign';
import {faSterlingSign} from '@fortawesome/pro-solid-svg-icons/faSterlingSign';
import {faBitcoinSign} from '@fortawesome/pro-solid-svg-icons/faBitcoinSign';
import {faMoneyBillWave} from '@fortawesome/pro-solid-svg-icons/faMoneyBillWave';
import {faMoneyBillTransfer} from '@fortawesome/pro-solid-svg-icons/faMoneyBillTransfer';
import {faMoneyBillTrendUp} from '@fortawesome/pro-solid-svg-icons/faMoneyBillTrendUp';
import {faMoneyCheck} from '@fortawesome/pro-solid-svg-icons/faMoneyCheck';
import {faMoneyCheckDollar} from '@fortawesome/pro-solid-svg-icons/faMoneyCheckDollar';
import {faPiggyBank} from '@fortawesome/pro-solid-svg-icons/faPiggyBank';
import {faSackDollar} from '@fortawesome/pro-solid-svg-icons/faSackDollar';
import {faVault} from '@fortawesome/pro-solid-svg-icons/faVault';
import {faCashRegister} from '@fortawesome/pro-solid-svg-icons/faCashRegister';
import {faHandHoldingDollar} from '@fortawesome/pro-solid-svg-icons/faHandHoldingDollar';
import {faCloudRain} from '@fortawesome/pro-solid-svg-icons/faCloudRain';
import {faCloudBolt} from '@fortawesome/pro-solid-svg-icons/faCloudBolt';
import {faWind} from '@fortawesome/pro-solid-svg-icons/faWind';
import {faTemperatureHigh} from '@fortawesome/pro-solid-svg-icons/faTemperatureHigh';
import {faTemperatureLow} from '@fortawesome/pro-solid-svg-icons/faTemperatureLow';
import {faTemperatureHalf} from '@fortawesome/pro-solid-svg-icons/faTemperatureHalf';
import {faUmbrella} from '@fortawesome/pro-solid-svg-icons/faUmbrella';
import {faRainbow} from '@fortawesome/pro-solid-svg-icons/faRainbow';
import {faIcicles} from '@fortawesome/pro-solid-svg-icons/faIcicles';
import {faMeteor} from '@fortawesome/pro-solid-svg-icons/faMeteor';
import {faTornado} from '@fortawesome/pro-solid-svg-icons/faTornado';
import {faHurricane} from '@fortawesome/pro-solid-svg-icons/faHurricane';
import {faSmog} from '@fortawesome/pro-solid-svg-icons/faSmog';
import {faMugHot} from '@fortawesome/pro-solid-svg-icons/faMugHot';
import {faCoffee} from '@fortawesome/pro-solid-svg-icons/faCoffee';
import {faPizzaSlice} from '@fortawesome/pro-solid-svg-icons/faPizzaSlice';
import {faHamburger} from '@fortawesome/pro-solid-svg-icons/faHamburger';
import {faCookie} from '@fortawesome/pro-solid-svg-icons/faCookie';
import {faIceCream} from '@fortawesome/pro-solid-svg-icons/faIceCream';
import {faCandyCane} from '@fortawesome/pro-solid-svg-icons/faCandyCane';
import {faAppleWhole} from '@fortawesome/pro-solid-svg-icons/faAppleWhole';
import {faLemon} from '@fortawesome/pro-solid-svg-icons/faLemon';
import {faCarrot} from '@fortawesome/pro-solid-svg-icons/faCarrot';
import {faUtensils} from '@fortawesome/pro-solid-svg-icons/faUtensils';
import {faWineGlass} from '@fortawesome/pro-solid-svg-icons/faWineGlass';
import {faBeer} from '@fortawesome/pro-solid-svg-icons/faBeer';
import {faChampagneGlasses} from '@fortawesome/pro-solid-svg-icons/faChampagneGlasses';
import {faMartiniGlass} from '@fortawesome/pro-solid-svg-icons/faMartiniGlass';
import {faCar} from '@fortawesome/pro-solid-svg-icons/faCar';
import {faBus} from '@fortawesome/pro-solid-svg-icons/faBus';
import {faTrain} from '@fortawesome/pro-solid-svg-icons/faTrain';
import {faPlane} from '@fortawesome/pro-solid-svg-icons/faPlane';
import {faShip} from '@fortawesome/pro-solid-svg-icons/faShip';
import {faBicycle} from '@fortawesome/pro-solid-svg-icons/faBicycle';
import {faMotorcycle} from '@fortawesome/pro-solid-svg-icons/faMotorcycle';
import {faTruck} from '@fortawesome/pro-solid-svg-icons/faTruck';
import {faTaxi} from '@fortawesome/pro-solid-svg-icons/faTaxi';
import {faHelicopter} from '@fortawesome/pro-solid-svg-icons/faHelicopter';
import {faJetFighter} from '@fortawesome/pro-solid-svg-icons/faJetFighter';
import {faSpaceShuttle} from '@fortawesome/pro-solid-svg-icons/faSpaceShuttle';
import {faAnchor} from '@fortawesome/pro-solid-svg-icons/faAnchor';
import {faCompass} from '@fortawesome/pro-solid-svg-icons/faCompass';
import {faBaseball} from '@fortawesome/pro-solid-svg-icons/faBaseball';
import {faBasketball} from '@fortawesome/pro-solid-svg-icons/faBasketball';
import {faFootball} from '@fortawesome/pro-solid-svg-icons/faFootball';
import {faFutbol} from '@fortawesome/pro-solid-svg-icons/faFutbol';
import {faGolfBall} from '@fortawesome/pro-solid-svg-icons/faGolfBall';
import {faTableTennis} from '@fortawesome/pro-solid-svg-icons/faTableTennis';
import {faBowlingBall} from '@fortawesome/pro-solid-svg-icons/faBowlingBall';
import {faVolleyball} from '@fortawesome/pro-solid-svg-icons/faVolleyball';
import {faDumbbell} from '@fortawesome/pro-solid-svg-icons/faDumbbell';
import {faPersonRunning} from '@fortawesome/pro-solid-svg-icons/faPersonRunning';
import {faPersonSwimming} from '@fortawesome/pro-solid-svg-icons/faPersonSwimming';
import {faPersonBiking} from '@fortawesome/pro-solid-svg-icons/faPersonBiking';
import {faPersonSkiing} from '@fortawesome/pro-solid-svg-icons/faPersonSkiing';
import {faPersonHiking} from '@fortawesome/pro-solid-svg-icons/faPersonHiking';
import {faChalkboard} from '@fortawesome/pro-solid-svg-icons/faChalkboard';
import {faChalkboardUser} from '@fortawesome/pro-solid-svg-icons/faChalkboardUser';
import {faSchool} from '@fortawesome/pro-solid-svg-icons/faSchool';
import {faPenRuler} from '@fortawesome/pro-solid-svg-icons/faPenRuler';
import {faRuler} from '@fortawesome/pro-solid-svg-icons/faRuler';
import {faCalculator} from '@fortawesome/pro-solid-svg-icons/faCalculator';
import {faFlask} from '@fortawesome/pro-solid-svg-icons/faFlask';
import {faAtom} from '@fortawesome/pro-solid-svg-icons/faAtom';
import {faMicroscope} from '@fortawesome/pro-solid-svg-icons/faMicroscope';
import {faDna} from '@fortawesome/pro-solid-svg-icons/faDna';
import {faBrain} from '@fortawesome/pro-solid-svg-icons/faBrain';
import {faLaptopCode} from '@fortawesome/pro-solid-svg-icons/faLaptopCode';
import {faWheelchair} from '@fortawesome/pro-solid-svg-icons/faWheelchair';
import {faUniversalAccess} from '@fortawesome/pro-solid-svg-icons/faUniversalAccess';
import {faSignLanguage} from '@fortawesome/pro-solid-svg-icons/faSignLanguage';
import {faEarListen} from '@fortawesome/pro-solid-svg-icons/faEarListen';
import {faHandDots} from '@fortawesome/pro-solid-svg-icons/faHandDots';
import {faPersonCane} from '@fortawesome/pro-solid-svg-icons/faPersonCane';
import {faCircle} from '@fortawesome/pro-solid-svg-icons/faCircle';
import {faSquare} from '@fortawesome/pro-solid-svg-icons/faSquare';
import {faTriangle} from '@fortawesome/pro-solid-svg-icons/faTriangle';
import {faDiamond} from '@fortawesome/pro-solid-svg-icons/faDiamond';
import {faPentagon} from '@fortawesome/pro-solid-svg-icons/faPentagon';
import {faHexagon} from '@fortawesome/pro-solid-svg-icons/faHexagon';
import {faOctagon} from '@fortawesome/pro-solid-svg-icons/faOctagon';
import {faStarHalf} from '@fortawesome/pro-solid-svg-icons/faStarHalf';
import {faCross} from '@fortawesome/pro-solid-svg-icons/faCross';
import {faYinYang} from '@fortawesome/pro-solid-svg-icons/faYinYang';
import {faInfinity} from '@fortawesome/pro-solid-svg-icons/faInfinity';
import {faOm} from '@fortawesome/pro-solid-svg-icons/faOm';
import {faDog} from '@fortawesome/pro-solid-svg-icons/faDog';
import {faCat} from '@fortawesome/pro-solid-svg-icons/faCat';
import {faHorse} from '@fortawesome/pro-solid-svg-icons/faHorse';
import {faFish} from '@fortawesome/pro-solid-svg-icons/faFish';
import {faDove} from '@fortawesome/pro-solid-svg-icons/faDove';
import {faCrow} from '@fortawesome/pro-solid-svg-icons/faCrow';
import {faSpider} from '@fortawesome/pro-solid-svg-icons/faSpider';
import {faWorm} from '@fortawesome/pro-solid-svg-icons/faWorm';
import {faShrimp} from '@fortawesome/pro-solid-svg-icons/faShrimp';
import {faOtter} from '@fortawesome/pro-solid-svg-icons/faOtter';
import {faHippo} from '@fortawesome/pro-solid-svg-icons/faHippo';
import {faFrog} from '@fortawesome/pro-solid-svg-icons/faFrog';
import {faKiwiBird} from '@fortawesome/pro-solid-svg-icons/faKiwiBird';
import {faMask} from '@fortawesome/pro-solid-svg-icons/faMask';
import {faGlasses} from '@fortawesome/pro-solid-svg-icons/faGlasses';
import {faHatCowboy} from '@fortawesome/pro-solid-svg-icons/faHatCowboy';
import {faHelmetSafety} from '@fortawesome/pro-solid-svg-icons/faHelmetSafety';
import {faCertificate} from '@fortawesome/pro-solid-svg-icons/faCertificate';
import {faRibbon} from '@fortawesome/pro-solid-svg-icons/faRibbon';
import {faMedkit} from '@fortawesome/pro-solid-svg-icons/faMedkit';
import {faFirstAid} from '@fortawesome/pro-solid-svg-icons/faFirstAid';
import {faBandage} from '@fortawesome/pro-solid-svg-icons/faBandage';
import {faCrutch} from '@fortawesome/pro-solid-svg-icons/faCrutch';
import {faBone} from '@fortawesome/pro-solid-svg-icons/faBone';
import {faSkull} from '@fortawesome/pro-solid-svg-icons/faSkull';
import {faSkullCrossbones} from '@fortawesome/pro-solid-svg-icons/faSkullCrossbones';
import {faBiohazard} from '@fortawesome/pro-solid-svg-icons/faBiohazard';
import {faRadiation} from '@fortawesome/pro-solid-svg-icons/faRadiation';
import {faArrowUpFromBracket} from '@fortawesome/pro-solid-svg-icons/faArrowUpFromBracket';
import {faArrowRightFromBracket} from '@fortawesome/pro-solid-svg-icons/faArrowRightFromBracket';
import {faArrowDownToLine} from '@fortawesome/pro-solid-svg-icons/faArrowDownToLine';
import {faArrowUpRightFromSquare} from '@fortawesome/pro-solid-svg-icons/faArrowUpRightFromSquare';
import {faArrowPointer} from '@fortawesome/pro-solid-svg-icons/faArrowPointer';
import {faArrowRotateLeft} from '@fortawesome/pro-solid-svg-icons/faArrowRotateLeft';
import {faArrowRotateRight} from '@fortawesome/pro-solid-svg-icons/faArrowRotateRight';
import {faArrowUpLong} from '@fortawesome/pro-solid-svg-icons/faArrowUpLong';
import {faArrowDownLong} from '@fortawesome/pro-solid-svg-icons/faArrowDownLong';
import {faArrowRightLong} from '@fortawesome/pro-solid-svg-icons/faArrowRightLong';
import {faArrowLeftLong} from '@fortawesome/pro-solid-svg-icons/faArrowLeftLong';
import {faArrowsTurnToDots} from '@fortawesome/pro-solid-svg-icons/faArrowsTurnToDots';
import {faArrowsSpin} from '@fortawesome/pro-solid-svg-icons/faArrowsSpin';
import {faArrowsLeftRight} from '@fortawesome/pro-solid-svg-icons/faArrowsLeftRight';
import {faArrowsUpDown} from '@fortawesome/pro-solid-svg-icons/faArrowsUpDown';
import {faChevronUp} from '@fortawesome/pro-solid-svg-icons/faChevronUp';
import {faChevronDown} from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import {faAnglesUp} from '@fortawesome/pro-solid-svg-icons/faAnglesUp';
import {faAnglesDown} from '@fortawesome/pro-solid-svg-icons/faAnglesDown';
import {faArrowUpFromLine} from '@fortawesome/pro-solid-svg-icons/faArrowUpFromLine';
import {faArrowDownFromLine} from '@fortawesome/pro-solid-svg-icons/faArrowDownFromLine';
import {faArrowRightToLine} from '@fortawesome/pro-solid-svg-icons/faArrowRightToLine';
import {faArrowLeftToLine} from '@fortawesome/pro-solid-svg-icons/faArrowLeftToLine';
import {faBold} from '@fortawesome/pro-solid-svg-icons/faBold';
import {faItalic} from '@fortawesome/pro-solid-svg-icons/faItalic';
import {faUnderline} from '@fortawesome/pro-solid-svg-icons/faUnderline';
import {faStrikethrough} from '@fortawesome/pro-solid-svg-icons/faStrikethrough';
import {faAlignLeft} from '@fortawesome/pro-solid-svg-icons/faAlignLeft';
import {faAlignCenter} from '@fortawesome/pro-solid-svg-icons/faAlignCenter';
import {faAlignRight} from '@fortawesome/pro-solid-svg-icons/faAlignRight';
import {faAlignJustify} from '@fortawesome/pro-solid-svg-icons/faAlignJustify';
import {faIndent} from '@fortawesome/pro-solid-svg-icons/faIndent';
import {faOutdent} from '@fortawesome/pro-solid-svg-icons/faOutdent';
import {faQuoteLeft} from '@fortawesome/pro-solid-svg-icons/faQuoteLeft';
import {faQuoteRight} from '@fortawesome/pro-solid-svg-icons/faQuoteRight';
import {faSubscript} from '@fortawesome/pro-solid-svg-icons/faSubscript';
import {faSuperscript} from '@fortawesome/pro-solid-svg-icons/faSuperscript';
import {faTextSlash} from '@fortawesome/pro-solid-svg-icons/faTextSlash';
import {faSpellCheck} from '@fortawesome/pro-solid-svg-icons/faSpellCheck';
import {faFont} from '@fortawesome/pro-solid-svg-icons/faFont';
import {faHeading} from '@fortawesome/pro-solid-svg-icons/faHeading';
import {faParagraph} from '@fortawesome/pro-solid-svg-icons/faParagraph';
import {faTextWidth} from '@fortawesome/pro-solid-svg-icons/faTextWidth';
import {faTextHeight} from '@fortawesome/pro-solid-svg-icons/faTextHeight';
import {faHighlighter} from '@fortawesome/pro-solid-svg-icons/faHighlighter';
import {faMinus} from '@fortawesome/pro-solid-svg-icons/faMinus';
import {faXmark} from '@fortawesome/pro-solid-svg-icons/faXmark';
import {faDivide} from '@fortawesome/pro-solid-svg-icons/faDivide';
import {faEquals} from '@fortawesome/pro-solid-svg-icons/faEquals';
import {faNotEqual} from '@fortawesome/pro-solid-svg-icons/faNotEqual';
import {faGreaterThan} from '@fortawesome/pro-solid-svg-icons/faGreaterThan';
import {faLessThan} from '@fortawesome/pro-solid-svg-icons/faLessThan';
import {faSquareRoot} from '@fortawesome/pro-solid-svg-icons/faSquareRoot';
import {faMap} from '@fortawesome/pro-solid-svg-icons/faMap';
import {faMapPin} from '@fortawesome/pro-solid-svg-icons/faMapPin';
import {faMapLocationDot} from '@fortawesome/pro-solid-svg-icons/faMapLocationDot';
import {faMapLocation} from '@fortawesome/pro-solid-svg-icons/faMapLocation';
import {faStreetView} from '@fortawesome/pro-solid-svg-icons/faStreetView';
import {faMountain} from '@fortawesome/pro-solid-svg-icons/faMountain';
import {faMountainSun} from '@fortawesome/pro-solid-svg-icons/faMountainSun';
import {faWater} from '@fortawesome/pro-solid-svg-icons/faWater';
import {faSwimmingPool} from '@fortawesome/pro-solid-svg-icons/faSwimmingPool';
import {faUmbrellaBeach} from '@fortawesome/pro-solid-svg-icons/faUmbrellaBeach';
import {faPersonWalking} from '@fortawesome/pro-solid-svg-icons/faPersonWalking';
import {faBridge} from '@fortawesome/pro-solid-svg-icons/faBridge';
import {faRoad} from '@fortawesome/pro-solid-svg-icons/faRoad';
import {faCity} from '@fortawesome/pro-solid-svg-icons/faCity';
import {faHandPointUp} from '@fortawesome/pro-solid-svg-icons/faHandPointUp';
import {faHandPointDown} from '@fortawesome/pro-solid-svg-icons/faHandPointDown';
import {faHandPointLeft} from '@fortawesome/pro-solid-svg-icons/faHandPointLeft';
import {faHandPointRight} from '@fortawesome/pro-solid-svg-icons/faHandPointRight';
import {faHandPeace} from '@fortawesome/pro-solid-svg-icons/faHandPeace';
import {faHandFist} from '@fortawesome/pro-solid-svg-icons/faHandFist';
import {faHandBackFist} from '@fortawesome/pro-solid-svg-icons/faHandBackFist';
import {faThumbsDown} from '@fortawesome/pro-solid-svg-icons/faThumbsDown';
import {faHandHolding} from '@fortawesome/pro-solid-svg-icons/faHandHolding';
import {faHandHoldingHeart} from '@fortawesome/pro-solid-svg-icons/faHandHoldingHeart';
import {faHandshakeAngle} from '@fortawesome/pro-solid-svg-icons/faHandshakeAngle';
import {faHandSparkles} from '@fortawesome/pro-solid-svg-icons/faHandSparkles';
import {faHands} from '@fortawesome/pro-solid-svg-icons/faHands';
import {faAnchorCircleCheck} from '@fortawesome/pro-solid-svg-icons/faAnchorCircleCheck';
import {faBellConcierge} from '@fortawesome/pro-solid-svg-icons/faBellConcierge';
import {faBroomBall} from '@fortawesome/pro-solid-svg-icons/faBroomBall';
import {faBucket} from '@fortawesome/pro-solid-svg-icons/faBucket';
import {faCartPlus} from '@fortawesome/pro-solid-svg-icons/faCartPlus';
import {faCartArrowDown} from '@fortawesome/pro-solid-svg-icons/faCartArrowDown';
import {faChair} from '@fortawesome/pro-solid-svg-icons/faChair';
import {faCouch} from '@fortawesome/pro-solid-svg-icons/faCouch';
import {faHouseLaptop} from '@fortawesome/pro-solid-svg-icons/faHouseLaptop';
import {faJar} from '@fortawesome/pro-solid-svg-icons/faJar';
import {faKitchenSet} from '@fortawesome/pro-solid-svg-icons/faKitchenSet';
import {faLightbulb as faSolidLightbulb} from '@fortawesome/pro-solid-svg-icons/faLightbulb';
import {faMagnet} from '@fortawesome/pro-solid-svg-icons/faMagnet';
import {faObjectUngroup} from '@fortawesome/pro-solid-svg-icons/faObjectUngroup';
import {faPenToSquare} from '@fortawesome/pro-solid-svg-icons/faPenToSquare';
import {faRulerCombined} from '@fortawesome/pro-solid-svg-icons/faRulerCombined';
import {faShapes} from '@fortawesome/pro-solid-svg-icons/faShapes';
import {faSwatchbook} from '@fortawesome/pro-solid-svg-icons/faSwatchbook';
import {faToolbox} from '@fortawesome/pro-solid-svg-icons/faToolbox';
import {faLockOpen} from '@fortawesome/pro-solid-svg-icons/faLockOpen';
import {faUnlock} from '@fortawesome/pro-solid-svg-icons/faUnlock';
import {faPassport} from '@fortawesome/pro-solid-svg-icons/faPassport';
import {faIdBadge} from '@fortawesome/pro-solid-svg-icons/faIdBadge';
import {faIdCard} from '@fortawesome/pro-solid-svg-icons/faIdCard';
import {faUserGraduate} from '@fortawesome/pro-solid-svg-icons/faUserGraduate';
import {faUserDoctor} from '@fortawesome/pro-solid-svg-icons/faUserDoctor';
import {faUserNinja} from '@fortawesome/pro-solid-svg-icons/faUserNinja';
import {faUserAstronaut} from '@fortawesome/pro-solid-svg-icons/faUserAstronaut';
import {faSpaghettiMonsterFlying} from '@fortawesome/pro-solid-svg-icons/faSpaghettiMonsterFlying';
import {faPoo} from '@fortawesome/pro-solid-svg-icons/faPoo';
import {faPoop} from '@fortawesome/pro-solid-svg-icons/faPoop';
import {faAlien} from '@fortawesome/pro-solid-svg-icons/faAlien';
import {faVirus} from '@fortawesome/pro-solid-svg-icons/faVirus';
import {faBacteria} from '@fortawesome/pro-solid-svg-icons/faBacteria';
import {faExplosion} from '@fortawesome/pro-solid-svg-icons/faExplosion';
import {faBomb} from '@fortawesome/pro-solid-svg-icons/faBomb';
import {faPersonFalling} from '@fortawesome/pro-solid-svg-icons/faPersonFalling';
import {faHandcuffs} from '@fortawesome/pro-solid-svg-icons/faHandcuffs';
import {faPlugCircleBolt} from '@fortawesome/pro-solid-svg-icons/faPlugCircleBolt';
import {faPlugCircleCheck} from '@fortawesome/pro-solid-svg-icons/faPlugCircleCheck';
import {faGem} from '@fortawesome/pro-solid-svg-icons/faGem';
import {faBookAtlas} from '@fortawesome/pro-solid-svg-icons/faBookAtlas';
import {faBookBible} from '@fortawesome/pro-solid-svg-icons/faBookBible';
import {faBookJournalWhills} from '@fortawesome/pro-solid-svg-icons/faBookJournalWhills';
import {faBookSkull} from '@fortawesome/pro-solid-svg-icons/faBookSkull';
import {faBookQuran} from '@fortawesome/pro-solid-svg-icons/faBookQuran';
import {faBookTanakh} from '@fortawesome/pro-solid-svg-icons/faBookTanakh';
import {faCloudArrowUp} from '@fortawesome/pro-solid-svg-icons/faCloudArrowUp';
import {faCloudArrowDown} from '@fortawesome/pro-solid-svg-icons/faCloudArrowDown';
import {faCirclePlus} from '@fortawesome/pro-solid-svg-icons/faCirclePlus';
import {faCircleMinus} from '@fortawesome/pro-solid-svg-icons/faCircleMinus';
import {faCircleArrowRight} from '@fortawesome/pro-solid-svg-icons/faCircleArrowRight';
import {faCircleArrowLeft} from '@fortawesome/pro-solid-svg-icons/faCircleArrowLeft';
import {faCircleArrowUp} from '@fortawesome/pro-solid-svg-icons/faCircleArrowUp';
import {faCircleArrowDown} from '@fortawesome/pro-solid-svg-icons/faCircleArrowDown';
import {faCircleDot} from '@fortawesome/pro-solid-svg-icons/faCircleDot';
import {faCircleNotch} from '@fortawesome/pro-solid-svg-icons/faCircleNotch';
import {faCirclePlay} from '@fortawesome/pro-solid-svg-icons/faCirclePlay';
import {faCirclePause} from '@fortawesome/pro-solid-svg-icons/faCirclePause';
import {faCircleStop} from '@fortawesome/pro-solid-svg-icons/faCircleStop';
import {faSquarePlus} from '@fortawesome/pro-solid-svg-icons/faSquarePlus';
import {faSquareMinus} from '@fortawesome/pro-solid-svg-icons/faSquareMinus';
import {faSquareCheck} from '@fortawesome/pro-solid-svg-icons/faSquareCheck';
import {faSquareXmark} from '@fortawesome/pro-solid-svg-icons/faSquareXmark';
import {faSquareArrowUpRight} from '@fortawesome/pro-solid-svg-icons/faSquareArrowUpRight';
import {faSquarePollVertical} from '@fortawesome/pro-solid-svg-icons/faSquarePollVertical';
import {faSquarePen} from '@fortawesome/pro-solid-svg-icons/faSquarePen';
import {faPlay} from '@fortawesome/pro-solid-svg-icons/faPlay';
import {faPause} from '@fortawesome/pro-solid-svg-icons/faPause';
import {faStop} from '@fortawesome/pro-solid-svg-icons/faStop';
import {faForward} from '@fortawesome/pro-solid-svg-icons/faForward';
import {faBackward} from '@fortawesome/pro-solid-svg-icons/faBackward';
import {faForwardStep} from '@fortawesome/pro-solid-svg-icons/faForwardStep';
import {faBackwardStep} from '@fortawesome/pro-solid-svg-icons/faBackwardStep';
import {faShuffle} from '@fortawesome/pro-solid-svg-icons/faShuffle';
import {faRepeat} from '@fortawesome/pro-solid-svg-icons/faRepeat';
import {faRecordVinyl} from '@fortawesome/pro-solid-svg-icons/faRecordVinyl';
import {faWindowMaximize} from '@fortawesome/pro-solid-svg-icons/faWindowMaximize';
import {faWindowMinimize} from '@fortawesome/pro-solid-svg-icons/faWindowMinimize';
import {faWindowRestore} from '@fortawesome/pro-solid-svg-icons/faWindowRestore';
import {faCubesStacked} from '@fortawesome/pro-solid-svg-icons/faCubesStacked';
import {faBoxOpen} from '@fortawesome/pro-solid-svg-icons/faBoxOpen';
import {faBoxesStacked} from '@fortawesome/pro-solid-svg-icons/faBoxesStacked';
import {faHandshakeSimple} from '@fortawesome/pro-solid-svg-icons/faHandshakeSimple';
import {faScaleUnbalanced} from '@fortawesome/pro-solid-svg-icons/faScaleUnbalanced';
import {faScaleUnbalancedFlip} from '@fortawesome/pro-solid-svg-icons/faScaleUnbalancedFlip';
import {faShieldCheck} from '@fortawesome/pro-solid-svg-icons/faShieldCheck';
import {faShieldCat} from '@fortawesome/pro-solid-svg-icons/faShieldCat';
import {faShieldDog} from '@fortawesome/pro-solid-svg-icons/faShieldDog';
import {faHouseFlag} from '@fortawesome/pro-solid-svg-icons/faHouseFlag';
import {faHouseFloodWater} from '@fortawesome/pro-solid-svg-icons/faHouseFloodWater';
import {faHouseMedical} from '@fortawesome/pro-solid-svg-icons/faHouseMedical';
import {faTowerBroadcast} from '@fortawesome/pro-solid-svg-icons/faTowerBroadcast';
import {faTowerObservation} from '@fortawesome/pro-solid-svg-icons/faTowerObservation';
import {faTowerCell} from '@fortawesome/pro-solid-svg-icons/faTowerCell';
import {faArrowUpWideShort} from '@fortawesome/pro-solid-svg-icons/faArrowUpWideShort';
import {faArrowDownWideShort} from '@fortawesome/pro-solid-svg-icons/faArrowDownWideShort';
import {faArrowUpShortWide} from '@fortawesome/pro-solid-svg-icons/faArrowUpShortWide';
import {faArrowDownShortWide} from '@fortawesome/pro-solid-svg-icons/faArrowDownShortWide';
import {faArrowUpAZ} from '@fortawesome/pro-solid-svg-icons/faArrowUpAZ';
import {faArrowDownAZ} from '@fortawesome/pro-solid-svg-icons/faArrowDownAZ';
import {faWaterLadder} from '@fortawesome/pro-solid-svg-icons/faWaterLadder';
import {faPersonDrowning} from '@fortawesome/pro-solid-svg-icons/faPersonDrowning';
import {faEarthEurope} from '@fortawesome/pro-solid-svg-icons/faEarthEurope';
import {faEarthAsia} from '@fortawesome/pro-solid-svg-icons/faEarthAsia';
import {faEarthAfrica} from '@fortawesome/pro-solid-svg-icons/faEarthAfrica';
import {faEarthOceania} from '@fortawesome/pro-solid-svg-icons/faEarthOceania';
import {faSatellite} from '@fortawesome/pro-solid-svg-icons/faSatellite';
import {faSatelliteDish} from '@fortawesome/pro-solid-svg-icons/faSatelliteDish';
import {faRadar} from '@fortawesome/pro-solid-svg-icons/faRadar';
import {faUserGroup} from '@fortawesome/pro-solid-svg-icons/faUserGroup';
import {faUserClock} from '@fortawesome/pro-solid-svg-icons/faUserClock';
import {faUserMinus} from '@fortawesome/pro-solid-svg-icons/faUserMinus';
import {faMessage} from '@fortawesome/pro-solid-svg-icons/faMessage';
import {faMessageDots} from '@fortawesome/pro-solid-svg-icons/faMessageDots';
import {faMessageLines} from '@fortawesome/pro-solid-svg-icons/faMessageLines';
import {faMessagePlus} from '@fortawesome/pro-solid-svg-icons/faMessagePlus';
import {faMessageMinus} from '@fortawesome/pro-solid-svg-icons/faMessageMinus';
import {faMessageCheck} from '@fortawesome/pro-solid-svg-icons/faMessageCheck';
import {faMessageXmark} from '@fortawesome/pro-solid-svg-icons/faMessageXmark';
import {faFileShield} from '@fortawesome/pro-solid-svg-icons/faFileShield';
import {faFileLock} from '@fortawesome/pro-solid-svg-icons/faFileLock';
import {faFilePen} from '@fortawesome/pro-solid-svg-icons/faFilePen';
import {faFileCheck} from '@fortawesome/pro-solid-svg-icons/faFileCheck';
import {faFileMinus} from '@fortawesome/pro-solid-svg-icons/faFileMinus';
import {faFilePlus} from '@fortawesome/pro-solid-svg-icons/faFilePlus';
import {faPen} from '@fortawesome/pro-solid-svg-icons/faPen';
import {faPenClip} from '@fortawesome/pro-solid-svg-icons/faPenClip';
import {faPenFancy} from '@fortawesome/pro-solid-svg-icons/faPenFancy';
import {faPenLine} from '@fortawesome/pro-solid-svg-icons/faPenLine';
import {faEraser} from '@fortawesome/pro-solid-svg-icons/faEraser';
import {faMarker} from '@fortawesome/pro-solid-svg-icons/faMarker';
import {faNoteSticky} from '@fortawesome/pro-solid-svg-icons/faNoteSticky';
import {faNotebook} from '@fortawesome/pro-solid-svg-icons/faNotebook';
import {faClipboardList} from '@fortawesome/pro-solid-svg-icons/faClipboardList';
import {faTableColumns} from '@fortawesome/pro-solid-svg-icons/faTableColumns';
import {faTableLayout} from '@fortawesome/pro-solid-svg-icons/faTableLayout';
import {faGaugeHigh} from '@fortawesome/pro-solid-svg-icons/faGaugeHigh';
import {faGaugeSimple} from '@fortawesome/pro-solid-svg-icons/faGaugeSimple';
import {faGaugeSimpleHigh} from '@fortawesome/pro-solid-svg-icons/faGaugeSimpleHigh';
import {faSpiderWeb} from '@fortawesome/pro-solid-svg-icons/faSpiderWeb';
import {faCandleHolder} from '@fortawesome/pro-solid-svg-icons/faCandleHolder';
import {faFlagCheckered} from '@fortawesome/pro-solid-svg-icons/faFlagCheckered';
import {faFlagSwallowtail} from '@fortawesome/pro-solid-svg-icons/faFlagSwallowtail';
import {faPersonDigging} from '@fortawesome/pro-solid-svg-icons/faPersonDigging';
import {faHelmetBattle} from '@fortawesome/pro-solid-svg-icons/faHelmetBattle';
import {faSwords} from '@fortawesome/pro-solid-svg-icons/faSwords';
import {faSword} from '@fortawesome/pro-solid-svg-icons/faSword';
import {faAxe} from '@fortawesome/pro-solid-svg-icons/faAxe';
import {faAxeBattle} from '@fortawesome/pro-solid-svg-icons/faAxeBattle';
import {faBowArrow} from '@fortawesome/pro-solid-svg-icons/faBowArrow';
import {faCrosshairs} from '@fortawesome/pro-solid-svg-icons/faCrosshairs';
import {faTreasureChest} from '@fortawesome/pro-solid-svg-icons/faTreasureChest';
import {faBellSlash} from '@fortawesome/pro-regular-svg-icons/faBellSlash';
import {faComment} from '@fortawesome/pro-regular-svg-icons/faComment';
import {faComments} from '@fortawesome/pro-regular-svg-icons/faComments';
import {faLightbulb} from '@fortawesome/pro-regular-svg-icons/faLightbulb';
import {faSmile} from '@fortawesome/pro-regular-svg-icons/faSmile';
import {faTrashCan} from '@fortawesome/pro-regular-svg-icons/faTrashCan';
import {faUserCircle} from '@fortawesome/pro-regular-svg-icons/faUserCircle';
import {
    faDiscord,
    faFacebook,
    faInstagram,
    faMastodon,
    faReddit,
    faThreads,
    faTiktok,
    faTwitch,
    faXTwitter,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {faAlarmExclamation} from '@fortawesome/pro-duotone-svg-icons/faAlarmExclamation';
import {faBellExclamation} from '@fortawesome/pro-duotone-svg-icons/faBellExclamation';
import {faBlockBrick} from '@fortawesome/pro-duotone-svg-icons/faBlockBrick';
import {faBroom} from '@fortawesome/pro-duotone-svg-icons/faBroom';
import {faBullhorn} from '@fortawesome/pro-duotone-svg-icons/faBullhorn';
import {faCakeCandles} from '@fortawesome/pro-duotone-svg-icons/faCakeCandles';
import {faCardsBlank} from '@fortawesome/pro-duotone-svg-icons/faCardsBlank';
import {faClipboard} from '@fortawesome/pro-duotone-svg-icons/faClipboard';
import {faClipboardCheck} from '@fortawesome/pro-duotone-svg-icons/faClipboardCheck';
import {faClipboardQuestion} from '@fortawesome/pro-duotone-svg-icons/faClipboardQuestion';
import {faClipboardUser} from '@fortawesome/pro-duotone-svg-icons/faClipboardUser';
import {faCommentsQuestion} from '@fortawesome/pro-duotone-svg-icons/faCommentsQuestion';
import {faCommentsQuestionCheck} from '@fortawesome/pro-duotone-svg-icons/faCommentsQuestionCheck';
import {faDice} from '@fortawesome/pro-duotone-svg-icons/faDice';
import {faDiceD20} from '@fortawesome/pro-duotone-svg-icons/faDiceD20';
import {faDiceFive} from '@fortawesome/pro-duotone-svg-icons/faDiceFive';
import {faFileUser} from '@fortawesome/pro-duotone-svg-icons/faFileUser';
import {faFlag} from '@fortawesome/pro-duotone-svg-icons/faFlag';
import {faGift} from '@fortawesome/pro-duotone-svg-icons/faGift';
import {faGun} from '@fortawesome/pro-duotone-svg-icons/faGun';
import {faHammerCrash} from '@fortawesome/pro-duotone-svg-icons/faHammerCrash';
import {faIcons} from '@fortawesome/pro-duotone-svg-icons/faIcons';
import {faImage} from '@fortawesome/pro-duotone-svg-icons/faImage';
import {faInfoCircle} from '@fortawesome/pro-duotone-svg-icons/faInfoCircle';
import {faListUl} from '@fortawesome/pro-duotone-svg-icons/faListUl';
import {faMessageBot} from '@fortawesome/pro-duotone-svg-icons/faMessageBot';
import {faMoonStars} from '@fortawesome/pro-duotone-svg-icons/faMoonStars';
import {faPalette} from '@fortawesome/pro-duotone-svg-icons/faPalette';
import {faPollPeople} from '@fortawesome/pro-duotone-svg-icons/faPollPeople';
import {faScrewdriverWrench} from '@fortawesome/pro-duotone-svg-icons/faScrewdriverWrench';
import {faTags} from '@fortawesome/pro-duotone-svg-icons/faTags';
import {faTickets} from '@fortawesome/pro-duotone-svg-icons/faTickets';
import {faTreeChristmas} from '@fortawesome/pro-duotone-svg-icons/faTreeChristmas';
import {faTriangleExclamation} from '@fortawesome/pro-duotone-svg-icons/faTriangleExclamation';
import {faUserGear} from '@fortawesome/pro-duotone-svg-icons/faUserGear';
import {faUserPen} from '@fortawesome/pro-duotone-svg-icons/faUserPen';
import {faUserPlus} from '@fortawesome/pro-duotone-svg-icons/faUserPlus';
import {faUserSecret} from '@fortawesome/pro-duotone-svg-icons/faUserSecret';
import {faUsersViewfinder} from '@fortawesome/pro-duotone-svg-icons/faUsersViewfinder';
import {faUserTag} from '@fortawesome/pro-duotone-svg-icons/faUserTag';
import {faUserTie} from '@fortawesome/pro-duotone-svg-icons/faUserTie';
import {faVolumeHigh} from '@fortawesome/pro-duotone-svg-icons/faVolumeHigh';
import {faShield as faDuotoneShield} from '@fortawesome/pro-duotone-svg-icons/faShield';
import {faStar as faDuotoneStar} from '@fortawesome/pro-duotone-svg-icons/faStar';
import {faHeart as faDuotoneHeart} from '@fortawesome/pro-duotone-svg-icons/faHeart';
import {faBell as faDuotoneBell} from '@fortawesome/pro-duotone-svg-icons/faBell';
import {faGear as faDuotoneGear} from '@fortawesome/pro-duotone-svg-icons/faGear';
import {faUser as faDuotoneUser} from '@fortawesome/pro-duotone-svg-icons/faUser';
import {faUsers as faDuotoneUsers} from '@fortawesome/pro-duotone-svg-icons/faUsers';
import {faEnvelope as faDuotoneEnvelope} from '@fortawesome/pro-duotone-svg-icons/faEnvelope';
import {faLock as faDuotoneLock} from '@fortawesome/pro-duotone-svg-icons/faLock';
import {faKey as faDuotoneKey} from '@fortawesome/pro-duotone-svg-icons/faKey';
import {faBolt as faDuotoneBolt} from '@fortawesome/pro-duotone-svg-icons/faBolt';
import {faFire as faDuotoneFire} from '@fortawesome/pro-duotone-svg-icons/faFire';
import {faRocket as faDuotoneRocket} from '@fortawesome/pro-duotone-svg-icons/faRocket';
import {faCrown as faDuotoneCrown} from '@fortawesome/pro-duotone-svg-icons/faCrown';
import {faTrophy as faDuotoneTrophy} from '@fortawesome/pro-duotone-svg-icons/faTrophy';
import {faMedal as faDuotoneMedal} from '@fortawesome/pro-duotone-svg-icons/faMedal';
import {faGem as faDuotoneGem} from '@fortawesome/pro-duotone-svg-icons/faGem';
import {faWandMagicSparkles as faDuotoneWandMagicSparkles} from '@fortawesome/pro-duotone-svg-icons/faWandMagicSparkles';
import {faBrain as faDuotoneBrain} from '@fortawesome/pro-duotone-svg-icons/faBrain';
import {faRobot as faDuotoneRobot} from '@fortawesome/pro-duotone-svg-icons/faRobot';
import {faGamepad as faDuotoneGamepad} from '@fortawesome/pro-duotone-svg-icons/faGamepad';
import {faMusic as faDuotoneMusic} from '@fortawesome/pro-duotone-svg-icons/faMusic';
import {faCamera as faDuotoneCamera} from '@fortawesome/pro-duotone-svg-icons/faCamera';
import {faGlobe as faDuotoneGlobe} from '@fortawesome/pro-duotone-svg-icons/faGlobe';
import {faCloud as faDuotoneCloud} from '@fortawesome/pro-duotone-svg-icons/faCloud';
import {faServer as faDuotoneServer} from '@fortawesome/pro-duotone-svg-icons/faServer';
import {faDatabase as faDuotoneDatabase} from '@fortawesome/pro-duotone-svg-icons/faDatabase';
import {faCode as faDuotoneCode} from '@fortawesome/pro-duotone-svg-icons/faCode';
import {faTerminal as faDuotoneTerminal} from '@fortawesome/pro-duotone-svg-icons/faTerminal';
import {faBug as faDuotoneBug} from '@fortawesome/pro-duotone-svg-icons/faBug';
import {faChartLine as faDuotoneChartLine} from '@fortawesome/pro-duotone-svg-icons/faChartLine';
import {faChartPie as faDuotoneChartPie} from '@fortawesome/pro-duotone-svg-icons/faChartPie';
import {faGauge as faDuotoneGauge} from '@fortawesome/pro-duotone-svg-icons/faGauge';
import {faCalendar as faDuotoneCalendar} from '@fortawesome/pro-duotone-svg-icons/faCalendar';
import {faClock as faDuotoneClock} from '@fortawesome/pro-duotone-svg-icons/faClock';
import {faBookmark as faDuotoneBookmark} from '@fortawesome/pro-duotone-svg-icons/faBookmark';
import {faFolder as faDuotoneFolder} from '@fortawesome/pro-duotone-svg-icons/faFolder';
import {faFile as faDuotoneFile} from '@fortawesome/pro-duotone-svg-icons/faFile';
import {faCircleCheck as faDuotoneCircleCheck} from '@fortawesome/pro-duotone-svg-icons/faCircleCheck';
import {faCircleXmark as faDuotoneCircleXmark} from '@fortawesome/pro-duotone-svg-icons/faCircleXmark';
import {faShieldHalved as faDuotoneShieldHalved} from '@fortawesome/pro-duotone-svg-icons/faShieldHalved';
import {faEye as faDuotoneEye} from '@fortawesome/pro-duotone-svg-icons/faEye';
import {faComments as faDuotoneComments} from '@fortawesome/pro-duotone-svg-icons/faComments';
import {faHashtag as faDuotoneHashtag} from '@fortawesome/pro-duotone-svg-icons/faHashtag';
import {faAt as faDuotoneAt} from '@fortawesome/pro-duotone-svg-icons/faAt';
import {faLink as faDuotoneLink} from '@fortawesome/pro-duotone-svg-icons/faLink';
import {faQrcode as faDuotoneQrcode} from '@fortawesome/pro-duotone-svg-icons/faQrcode';
import {faPuzzlePiece as faDuotonePuzzlePiece} from '@fortawesome/pro-duotone-svg-icons/faPuzzlePiece';

export const icons = {
    'fas fa-dice': faDice,
    'fas fa-tools': faTools,
    'fas fa-dice-d20': faDiceD20,
    'far fa-bell-slash': faBellSlash,
    'far fa-slash': faSlashForward,
    'far fa-bell': faBell,
    'far fa-code': faCode,
    'far fa-robot': faRobot,
    'fas fa-right-from-bracket': faRightFromBracket,
    'fa-regular fa-trash-can': faTrashCan,
    'fas fa-comment-dots': faCommentDots,
    'fas fa-bullhorn': faBullhorn,
    'far fa-smile': faSmile,
    'fa-regular fa-comment': faComment,
    'fa fa-bell-exclamation': faBellExclamation,
    'far fa-user-circle': faUserCircle,
    'far fa-image': faImage,
    'fa-solid fa-user': faUser,
    'fa-duotone fa-regular fa-triangle-exclamation': faTriangleExclamation,
    'fa-regular fa-clock-rotate-left': faClockRotateLeft,
    'fa-solid fa-shield': faShield,
    'fa-solid fa-badge-check': faBadgeCheck,
    'fa-solid fa-users': faUsers,
    'fa fa-message-bot': faMessageBot,
    'fa fa-messages': faMessages,
    'fa fa-file-user': faFileUser,
    'far fa-icons': faIcons,
    'fas fa-birthday-cake': faCakeCandles,
    'fas fa-stream': faStream,
    'fas fa-arrow-up-1-9': faArrowUp19,
    'fa-solid fa-bank': faBank,
    'fa-solid fa-calendar-days': faCalendarDays,
    'fa-solid fa-calendar': faCalendar,
    'fas fa-block-brick': faBlockBrick,
    'fas fa-laugh-squint': faLaughSquint,
    'fas fa-gift': faGift,
    'fa-solid fa-cards-blank': faCardsBlank,
    'fa-duotone fa-clock-alarm': faAlarmExclamation,
    'fas fa-dice-five': faDiceFive,
    'fa-solid fa-circle-info': faCircleInfo,
    'fa-solid fa-list-dropdown': faListDropdown,
    'fa-solid fa-mouse': faMousePointer,
    'fa-solid fa-user-plus': faUserPlus,
    'fas fa-lock': faLock,
    'fa-solid fa-user-pen': faUserPen,
    'fas fa-moon-stars': faMoonStars,
    'fas fa-screwdriver-wrench': faScrewdriverWrench,
    'fa-solid fa-rss': faRss,
    'fa-solid fa-scissors': faHandScissors,
    'fas fa-comments': faSolidComments,
    'far fa-comments': faComments,
    'far fa-comment': faComment,
    'fa-solid fa-clipboard-list': faClipboard,
    'fas fa-hammer': faHammerCrash,
    'fas fa-clipboard-user': faClipboardUser,
    'fas fa-clipboard-question': faClipboardQuestion,
    'fas fa-list-ul': faListUl,
    'fas fa-sign-in-alt': faSignInAlt,
    'fas fa-poll': faPollPeople,
    'fas fa-info-circle': faInfoCircle,
    'far fa-lightbulb': faLightbulb,
    'fas fa-hourglass-half': faHourglassHalf,
    'fas fa-ticket-simple': faTickets,
    'fa-brands fa-twitch': faTwitch,
    'fa-brands fa-youtube': faYoutube,
    'fa-brands fa-twitter': faXTwitter,
    'fa-brands fa-tiktok': faTiktok,
    'fa-brands fa-instagram': faInstagram,
    'fa-brands fa-facebook': faFacebook,
    'fa-brands fa-reddit': faReddit,
    'fas fa-door-open': faDoorOpen,
    'fas fa-gears': faGears,
    'fa-user-tie': faUserTie,
    'fa-brands fa-threads': faThreads,
    'fa-brands fa-mastodon': faMastodon,
    'far fa-gear': faUserGear,
    'far fa-terminal': faTerminal,
    'fa-solid fa-border-all': faBorderAll,
    'fa-solid fa-comments-question-check': faCommentsQuestionCheck,
    'fa-solid fa-icons': faIcons,
    'fa-solid fa-check-to-slot': faCheckToSlot,
    'fa-solid fa-users-viewfinder': faUsersViewfinder,
    'fa-solid fa-tags': faTags,
    'fa-solid fa-volume-high': faVolumeHigh,
    'fa-solid fa-user-tag': faUserTag,
    'fas fa-circle-chevron-up': faCircleChevronUp,
    'fa-solid fa-table-cells': faTableCells,
    'fa-solid fa-clipboard-check': faClipboardCheck,
    'fas fa-palette': faPalette,
    'fa-solid fa-puzzle-piece': faPuzzlePiece,
    'fas fa-gun': faGun,
    'fa-solid fa-flag': faFlag,
    'fas fa-ranking-stars': faRankingStar,
    'fas fa-reel': faReel,
    'fas fa-box': faBox,
    'fas fa-webhook': faWebhook,
    'fas fa-pool-people': faPollPeople,
    'fas fa-fire': faFireFlameCurved,
    'fa-duotone fa-tree-christmas': faTreeChristmas,
    'fa-sharp-duotone fa-solid fa-user-secret': faUserSecret,
    'fas fa-star': faStar,
    'fas fa-smile': faFaceSmile,
    'fas fa-thumbtack': faThumbtack,
    'fab fa-discord': faDiscord,
    'fa-solid fa-hashtag': faHashtag,
    'fa-solid fa-code-branch': faCodeBranch,
    'fa-duotone fa-broom': faBroom,
    'far fa-comment-dots': faCommentsQuestion,
    'fa-sold fa-plus': faPlus,
    'fa-solid fa-file-circle-check': faFileCirclePlus,
    'fas fa-credit-card': faCreditCard,
    'fas fa-server': faServer,
    'fas fa-envelope': faEnvelope,
    'fas fa-envelope-open': faEnvelopeOpen,
    'fas fa-bug': faBug,
    'fas fa-life-ring': faLifeRing,
    'fas fa-headset': faHeadset,
    'fas fa-receipt': faReceipt,
    'fas fa-wrench': faWrench,
    'fas fa-circle-question': faCircleQuestion,
    'fas fa-bullseye': faBullseye,
    'fas fa-database': faDatabase,
    'fas fa-key': faKey,
    'fas fa-gavel': faGavel,
    'fas fa-ban': faBan,
    'fas fa-money-bill': faMoneyBill,
    'fas fa-scale-balanced': faScaleBalanced,
    'fas fa-file-lines': faFileLines,
    'fas fa-handshake': faHandshake,
    'fas fa-chart-line': faChartLine,
    'fas fa-globe': faGlobe,
    'fas fa-microphone': faMicrophone,
    'fas fa-music': faMusic,
    'fas fa-gamepad': faGamepad,
    'fas fa-shopping-cart': faShoppingCart,
    'fas fa-crown': faCrown,
    'fas fa-medal': faMedal,
    'fas fa-trophy': faTrophy,
    'fas fa-book-open': faBookOpen,
    'fas fa-graduation-cap': faGraduationCap,
    'fas fa-map-marker-alt': faMapMarkerAlt,
    'fas fa-link': faLink,
    'fas fa-share-nodes': faShareNodes,
    'fas fa-filter': faFilter,
    'fas fa-magnifying-glass': faMagnifyingGlass,
    'fas fa-chart-pie': faChartPie,
    'fas fa-chart-bar': faChartBar,
    'fas fa-bolt': faBolt,
    'fas fa-wand-magic-sparkles': faWandMagicSparkles,
    'fas fa-shield-halved': faShieldHalved,
    'fas fa-user-shield': faUserShield,
    'fas fa-language': faLanguage,
    'fas fa-earth-americas': faEarthAmericas,
    'fas fa-paintbrush': faPaintbrush,
    'fas fa-object-group': faObjectGroup,
    'fas fa-layer-group': faLayerGroup,
    'fas fa-sitemap': faSitemap,
    'fas fa-network-wired': faNetworkWired,
    'fas fa-cloud': faCloud,
    'fas fa-download': faDownload,
    'fas fa-upload': faUpload,
    'fas fa-folder-open': faFolderOpen,
    'fas fa-newspaper': faNewspaper,
    'fas fa-blog': faBlog,
    'fas fa-pen-nib': faPenNib,
    'fas fa-at': faAt,
    'fas fa-phone': faPhone,
    'fas fa-location-dot': faLocationDot,
    'fas fa-house': faHouse,
    'fas fa-store': faStore,
    'fas fa-cart-shopping': faCartShopping,
    'fas fa-percent': faPercent,
    'fas fa-coins': faCoins,
    'fas fa-wallet': faWallet,
    'fas fa-chart-simple': faChartSimple,
    'fas fa-arrow-trend-up': faArrowTrendUp,
    'fas fa-gauge': faGauge,
    'fas fa-spinner': faSpinner,
    'fas fa-circle-check': faCircleCheck,
    'fas fa-circle-xmark': faCircleXmark,
    'fas fa-eye': faEye,
    'fas fa-eye-slash': faEyeSlash,
    'fas fa-bell-on': faBellOn,
    'fas fa-heart': faHeart,
    'fas fa-thumbs-up': faThumbsUp,
    'fas fa-award': faAward,
    'fas fa-party-horn': faPartyHorn,
    'fas fa-sparkles': faSparkles,
    'fas fa-magic': faMagic,
    'fas fa-inbox': faInbox,
    'fas fa-reply': faReply,
    'fas fa-reply-all': faReplyAll,
    'fas fa-paper-plane': faPaperPlane,
    'fas fa-envelopes-bulk': faEnvelopesBulk,
    'fas fa-fax': faFax,
    'fa-solid fa-hammer': faHammer,
    'fas fa-shield-exclamation': faShieldExclamation,
    'fas fa-user-slash': faUserSlash,
    'fas fa-user-xmark': faUserXmark,
    'fas fa-user-check': faUserCheck,
    'fas fa-user-lock': faUserLock,
    'fas fa-hand-middle-finger': faHandMiddleFinger,
    'fas fa-octagon-exclamation': faOctagonExclamation,
    'fas fa-camera': faCamera,
    'fas fa-video': faVideo,
    'fas fa-film': faFilm,
    'fas fa-images': faImages,
    'fas fa-photo-film': faPhotoFilm,
    'fas fa-volume-off': faVolumeOff,
    'fas fa-volume-low': faVolumeLow,
    'fas fa-volume-xmark': faVolumeXmark,
    'fas fa-podcast': faPodcast,
    'fas fa-radio': faRadio,
    'fas fa-headphones': faHeadphones,
    'fas fa-arrow-right': faArrowRight,
    'fas fa-arrow-left': faArrowLeft,
    'fas fa-arrow-up': faArrowUp,
    'fas fa-arrow-down': faArrowDown,
    'fas fa-angles-right': faAnglesRight,
    'fas fa-angles-left': faAnglesLeft,
    'fas fa-chevron-right': faChevronRight,
    'fas fa-chevron-left': faChevronLeft,
    'fas fa-arrows-rotate': faArrowsRotate,
    'fas fa-rotate': faRotate,
    'fas fa-expand': faExpand,
    'fas fa-compress': faCompress,
    'fas fa-maximize': faMaximize,
    'fas fa-minimize': faMinimize,
    'fas fa-up-right-and-down-left-from-center': faUpRightAndDownLeftFromCenter,
    'fas fa-file': faFile,
    'fas fa-file-pdf': faFilePdf,
    'fas fa-file-image': faFileImage,
    'fas fa-file-code': faFileCode,
    'fas fa-file-zipper': faFileZipper,
    'fas fa-file-export': faFileExport,
    'fas fa-file-import': faFileImport,
    'fas fa-file-arrow-up': faFileArrowUp,
    'fas fa-file-arrow-down': faFileArrowDown,
    'fas fa-file-csv': faFileCsv,
    'fas fa-file-excel': faFileExcel,
    'fas fa-file-word': faFileWord,
    'fas fa-copy': faCopy,
    'fas fa-paste': faPaste,
    'fas fa-scissors': faScissors,
    'fas fa-trash': faTrash,
    'fas fa-clock': faClock,
    'fas fa-stopwatch': faStopwatch,
    'fas fa-timer': faTimer,
    'fas fa-calendar-check': faCalendarCheck,
    'fas fa-calendar-plus': faCalendarPlus,
    'fas fa-calendar-minus': faCalendarMinus,
    'fas fa-calendar-xmark': faCalendarXmark,
    'fas fa-folder-plus': faFolderPlus,
    'fas fa-folder-minus': faFolderMinus,
    'fas fa-folder-tree': faFolderTree,
    'fas fa-box-archive': faBoxArchive,
    'fas fa-bookmark': faBookmark,
    'fas fa-tag': faTag,
    'fas fa-list': faList,
    'fas fa-list-ol': faListOl,
    'fas fa-list-check': faListCheck,
    'fas fa-table-list': faTableList,
    'fas fa-grip-vertical': faGripVertical,
    'fas fa-sort': faSort,
    'fas fa-sort-up': faSortUp,
    'fas fa-sort-down': faSortDown,
    'fas fa-gear': faGear,
    'fas fa-sliders': faSliders,
    'fas fa-toggle-on': faToggleOn,
    'fas fa-toggle-off': faToggleOff,
    'fas fa-ellipsis': faEllipsis,
    'fas fa-ellipsis-vertical': faEllipsisVertical,
    'fas fa-bars': faBars,
    'fas fa-circle-half-stroke': faCircleHalfStroke,
    'fas fa-face-grin': faFaceGrin,
    'fas fa-face-laugh': faFaceLaugh,
    'fas fa-face-sad-tear': faFaceSadTear,
    'fas fa-face-angry': faFaceAngry,
    'fas fa-face-surprise': faFaceSurprise,
    'fas fa-face-meh': faFaceMeh,
    'fas fa-hands-clapping': faHandsClapping,
    'fa-solid fa-fire': faFire,
    'fas fa-code-merge': faCodeMerge,
    'fas fa-code-pull-request': faCodePullRequest,
    'fas fa-code-commit': faCodeCommit,
    'fas fa-code-fork': faCodeFork,
    'fas fa-brackets-curly': faBracketsCurly,
    'fas fa-microchip': faMicrochip,
    'fas fa-cubes': faCubes,
    'fas fa-plug': faPlug,
    'fas fa-briefcase': faBriefcase,
    'fas fa-building': faBuilding,
    'fas fa-industry': faIndustry,
    'fas fa-landmark': faLandmark,
    'fas fa-scroll': faScroll,
    'fas fa-stamp': faStamp,
    'fas fa-signature': faSignature,
    'fas fa-file-contract': faFileContract,
    'fas fa-file-invoice': faFileInvoice,
    'fas fa-file-invoice-dollar': faFileInvoiceDollar,
    'fas fa-sun': faSun,
    'fas fa-moon': faMoon,
    'fas fa-cloud-sun': faCloudSun,
    'fas fa-cloud-moon': faCloudMoon,
    'fas fa-snowflake': faSnowflake,
    'fas fa-droplet': faDroplet,
    'fas fa-leaf': faLeaf,
    'fas fa-tree': faTree,
    'fas fa-seedling': faSeedling,
    'fas fa-flower': faFlower,
    'fas fa-heart-pulse': faHeartPulse,
    'fas fa-stethoscope': faStethoscope,
    'fas fa-syringe': faSyringe,
    'fas fa-pills': faPills,
    'fas fa-shield-virus': faShieldVirus,
    'fas fa-virus-slash': faVirusSlash,
    'fas fa-qrcode': faQrcode,
    'fas fa-barcode': faBarcode,
    'fas fa-fingerprint': faFingerprint,
    'fas fa-rocket': faRocket,
    'fas fa-paperclip': faPaperclip,
    'fas fa-magnifying-glass-plus': faMagnifyingGlassPlus,
    'fas fa-magnifying-glass-minus': faMagnifyingGlassMinus,
    'fas fa-wifi': faWifi,
    'fas fa-signal': faSignal,
    'fas fa-battery': faBattery,
    'fas fa-power-off': faPowerOff,
    'fas fa-desktop': faDesktop,
    'fas fa-mobile': faMobile,
    'fas fa-tablet': faTablet,
    'fas fa-laptop': faLaptop,
    'fas fa-print': faPrint,
    'fas fa-keyboard': faKeyboard,
    'fas fa-chess': faChess,
    'fas fa-chess-pawn': faChessPawn,
    'fas fa-chess-knight': faChessKnight,
    'fas fa-chess-rook': faChessRook,
    'fas fa-chess-bishop': faChessBishop,
    'fas fa-chess-king': faChessKing,
    'fas fa-chess-queen': faChessQueen,
    'fas fa-chess-board': faChessBoard,
    'fas fa-puzzle': faPuzzle,
    'fas fa-dragon': faDragon,
    'fas fa-ghost': faGhost,
    'fas fa-hat-wizard': faHatWizard,
    'fas fa-dungeon': faDungeon,
    'fas fa-wand-sparkles': faWandSparkles,
    'fas fa-dice-one': faDiceOne,
    'fas fa-dice-two': faDiceTwo,
    'fas fa-dice-three': faDiceThree,
    'fas fa-dice-four': faDiceFour,
    'fas fa-dice-six': faDiceSix,
    'fas fa-joystick': faJoystick,
    'fas fa-dollar-sign': faDollarSign,
    'fas fa-euro-sign': faEuroSign,
    'fas fa-yen-sign': faYenSign,
    'fas fa-sterling-sign': faSterlingSign,
    'fas fa-bitcoin-sign': faBitcoinSign,
    'fas fa-money-bill-wave': faMoneyBillWave,
    'fas fa-money-bill-transfer': faMoneyBillTransfer,
    'fas fa-money-bill-trend-up': faMoneyBillTrendUp,
    'fas fa-money-check': faMoneyCheck,
    'fas fa-money-check-dollar': faMoneyCheckDollar,
    'fas fa-piggy-bank': faPiggyBank,
    'fas fa-sack-dollar': faSackDollar,
    'fas fa-vault': faVault,
    'fas fa-cash-register': faCashRegister,
    'fas fa-hand-holding-dollar': faHandHoldingDollar,
    'fas fa-cloud-rain': faCloudRain,
    'fas fa-cloud-bolt': faCloudBolt,
    'fas fa-wind': faWind,
    'fas fa-temperature-high': faTemperatureHigh,
    'fas fa-temperature-low': faTemperatureLow,
    'fas fa-temperature-half': faTemperatureHalf,
    'fas fa-umbrella': faUmbrella,
    'fas fa-rainbow': faRainbow,
    'fas fa-icicles': faIcicles,
    'fas fa-meteor': faMeteor,
    'fas fa-tornado': faTornado,
    'fas fa-hurricane': faHurricane,
    'fas fa-smog': faSmog,
    'fas fa-mug-hot': faMugHot,
    'fas fa-mug-saucer': faCoffee,
    'fas fa-pizza-slice': faPizzaSlice,
    'fas fa-burger': faHamburger,
    'fas fa-cookie': faCookie,
    'fas fa-ice-cream': faIceCream,
    'fas fa-candy-cane': faCandyCane,
    'fas fa-apple-whole': faAppleWhole,
    'fas fa-lemon': faLemon,
    'fas fa-carrot': faCarrot,
    'fas fa-utensils': faUtensils,
    'fas fa-wine-glass': faWineGlass,
    'fas fa-beer-mug-empty': faBeer,
    'fas fa-champagne-glasses': faChampagneGlasses,
    'fas fa-martini-glass': faMartiniGlass,
    'fas fa-car': faCar,
    'fas fa-bus': faBus,
    'fas fa-train': faTrain,
    'fas fa-plane': faPlane,
    'fas fa-ship': faShip,
    'fas fa-bicycle': faBicycle,
    'fas fa-motorcycle': faMotorcycle,
    'fas fa-truck': faTruck,
    'fas fa-taxi': faTaxi,
    'fas fa-helicopter': faHelicopter,
    'fas fa-jet-fighter': faJetFighter,
    'fas fa-shuttle-space': faSpaceShuttle,
    'fas fa-anchor': faAnchor,
    'fas fa-compass': faCompass,
    'fas fa-baseball': faBaseball,
    'fas fa-basketball': faBasketball,
    'fas fa-football': faFootball,
    'fas fa-futbol': faFutbol,
    'fas fa-golf-ball-tee': faGolfBall,
    'fas fa-table-tennis-paddle-ball': faTableTennis,
    'fas fa-bowling-ball': faBowlingBall,
    'fas fa-volleyball': faVolleyball,
    'fas fa-dumbbell': faDumbbell,
    'fas fa-person-running': faPersonRunning,
    'fas fa-person-swimming': faPersonSwimming,
    'fas fa-person-biking': faPersonBiking,
    'fas fa-person-skiing': faPersonSkiing,
    'fas fa-person-hiking': faPersonHiking,
    'fas fa-chalkboard': faChalkboard,
    'fas fa-chalkboard-user': faChalkboardUser,
    'fas fa-school': faSchool,
    'fas fa-pen-ruler': faPenRuler,
    'fas fa-ruler': faRuler,
    'fas fa-calculator': faCalculator,
    'fas fa-flask': faFlask,
    'fas fa-atom': faAtom,
    'fas fa-microscope': faMicroscope,
    'fas fa-dna': faDna,
    'fas fa-brain': faBrain,
    'fas fa-laptop-code': faLaptopCode,
    'fas fa-wheelchair': faWheelchair,
    'fas fa-universal-access': faUniversalAccess,
    'fas fa-hands': faSignLanguage,
    'fas fa-ear-listen': faEarListen,
    'fas fa-hand-dots': faHandDots,
    'fas fa-person-cane': faPersonCane,
    'fas fa-circle': faCircle,
    'fas fa-square': faSquare,
    'fas fa-triangle': faTriangle,
    'fas fa-diamond': faDiamond,
    'fas fa-pentagon': faPentagon,
    'fas fa-hexagon': faHexagon,
    'fas fa-octagon': faOctagon,
    'fas fa-star-half': faStarHalf,
    'fas fa-cross': faCross,
    'fas fa-yin-yang': faYinYang,
    'fas fa-infinity': faInfinity,
    'fas fa-om': faOm,
    'fas fa-dog': faDog,
    'fas fa-cat': faCat,
    'fas fa-horse': faHorse,
    'fas fa-fish': faFish,
    'fas fa-dove': faDove,
    'fas fa-crow': faCrow,
    'fas fa-spider': faSpider,
    'fas fa-worm': faWorm,
    'fas fa-shrimp': faShrimp,
    'fas fa-otter': faOtter,
    'fas fa-hippo': faHippo,
    'fas fa-frog': faFrog,
    'fas fa-kiwi-bird': faKiwiBird,
    'fas fa-mask': faMask,
    'fas fa-glasses': faGlasses,
    'fas fa-hat-cowboy': faHatCowboy,
    'fas fa-helmet-safety': faHelmetSafety,
    'fas fa-certificate': faCertificate,
    'fas fa-ribbon': faRibbon,
    'fas fa-suitcase-medical': faMedkit,
    'fas fa-kit-medical': faFirstAid,
    'fas fa-bandage': faBandage,
    'fas fa-crutch': faCrutch,
    'fas fa-bone': faBone,
    'fas fa-skull': faSkull,
    'fas fa-skull-crossbones': faSkullCrossbones,
    'fas fa-biohazard': faBiohazard,
    'fas fa-radiation': faRadiation,
    // Arrows & Direction
    'fas fa-arrow-up-from-bracket': faArrowUpFromBracket,
    'fas fa-arrow-right-from-bracket': faArrowRightFromBracket,
    'fas fa-arrow-down-to-line': faArrowDownToLine,
    'fas fa-arrow-up-right-from-square': faArrowUpRightFromSquare,
    'fas fa-arrow-pointer': faArrowPointer,
    'fas fa-arrow-rotate-left': faArrowRotateLeft,
    'fas fa-arrow-rotate-right': faArrowRotateRight,
    'fas fa-arrow-up-long': faArrowUpLong,
    'fas fa-arrow-down-long': faArrowDownLong,
    'fas fa-arrow-right-long': faArrowRightLong,
    'fas fa-arrow-left-long': faArrowLeftLong,
    'fas fa-arrows-turn-to-dots': faArrowsTurnToDots,
    'fas fa-arrows-spin': faArrowsSpin,
    'fas fa-arrows-left-right': faArrowsLeftRight,
    'fas fa-arrows-up-down': faArrowsUpDown,
    'fas fa-chevron-up': faChevronUp,
    'fas fa-chevron-down': faChevronDown,
    'fas fa-angles-up': faAnglesUp,
    'fas fa-angles-down': faAnglesDown,
    'fas fa-arrow-up-from-line': faArrowUpFromLine,
    'fas fa-arrow-down-from-line': faArrowDownFromLine,
    'fas fa-arrow-right-to-line': faArrowRightToLine,
    'fas fa-arrow-left-to-line': faArrowLeftToLine,
    'fas fa-arrow-up-wide-short': faArrowUpWideShort,
    'fas fa-arrow-down-wide-short': faArrowDownWideShort,
    'fas fa-arrow-up-short-wide': faArrowUpShortWide,
    'fas fa-arrow-down-short-wide': faArrowDownShortWide,
    'fas fa-arrow-up-a-z': faArrowUpAZ,
    'fas fa-arrow-down-a-z': faArrowDownAZ,
    // Text & Editor
    'fas fa-bold': faBold,
    'fas fa-italic': faItalic,
    'fas fa-underline': faUnderline,
    'fas fa-strikethrough': faStrikethrough,
    'fas fa-align-left': faAlignLeft,
    'fas fa-align-center': faAlignCenter,
    'fas fa-align-right': faAlignRight,
    'fas fa-align-justify': faAlignJustify,
    'fas fa-indent': faIndent,
    'fas fa-outdent': faOutdent,
    'fas fa-quote-left': faQuoteLeft,
    'fas fa-quote-right': faQuoteRight,
    'fas fa-subscript': faSubscript,
    'fas fa-superscript': faSuperscript,
    'fas fa-text-slash': faTextSlash,
    'fas fa-spell-check': faSpellCheck,
    'fas fa-font': faFont,
    'fas fa-heading': faHeading,
    'fas fa-paragraph': faParagraph,
    'fas fa-text-width': faTextWidth,
    'fas fa-text-height': faTextHeight,
    'fas fa-highlighter': faHighlighter,
    'fas fa-pen': faPen,
    'fas fa-pen-clip': faPenClip,
    'fas fa-pen-fancy': faPenFancy,
    'fas fa-pen-line': faPenLine,
    'fas fa-pen-to-square': faPenToSquare,
    'fas fa-eraser': faEraser,
    'fas fa-marker': faMarker,
    'fas fa-note-sticky': faNoteSticky,
    'fas fa-notebook': faNotebook,
    // Math & Numbers
    'fas fa-minus': faMinus,
    'fas fa-xmark': faXmark,
    'fas fa-divide': faDivide,
    'fas fa-equals': faEquals,
    'fas fa-not-equal': faNotEqual,
    'fas fa-greater-than': faGreaterThan,
    'fas fa-less-than': faLessThan,
    'fas fa-square-root': faSquareRoot,
    // Maps & Places
    'fas fa-map': faMap,
    'fas fa-map-pin': faMapPin,
    'fas fa-map-location-dot': faMapLocationDot,
    'fas fa-map-location': faMapLocation,
    'fas fa-street-view': faStreetView,
    'fas fa-mountain': faMountain,
    'fas fa-mountain-sun': faMountainSun,
    'fas fa-water': faWater,
    'fas fa-swimming-pool': faSwimmingPool,
    'fas fa-umbrella-beach': faUmbrellaBeach,
    'fas fa-person-walking': faPersonWalking,
    'fas fa-bridge': faBridge,
    'fas fa-road': faRoad,
    'fas fa-city': faCity,
    'fas fa-earth-europe': faEarthEurope,
    'fas fa-earth-asia': faEarthAsia,
    'fas fa-earth-africa': faEarthAfrica,
    'fas fa-earth-oceania': faEarthOceania,
    // Hands & Gestures
    'fas fa-hand-point-up': faHandPointUp,
    'fas fa-hand-point-down': faHandPointDown,
    'fas fa-hand-point-left': faHandPointLeft,
    'fas fa-hand-point-right': faHandPointRight,
    'fas fa-hand-peace': faHandPeace,
    'fas fa-hand-fist': faHandFist,
    'fas fa-hand-back-fist': faHandBackFist,
    'fas fa-thumbs-down': faThumbsDown,
    'fas fa-hand-holding': faHandHolding,
    'fas fa-hand-holding-heart': faHandHoldingHeart,
    'fas fa-handshake-angle': faHandshakeAngle,
    'fas fa-hand-sparkles': faHandSparkles,
    'fas fa-hands-asl-interpreting': faHands,
    // Objects
    'fas fa-anchor-circle-check': faAnchorCircleCheck,
    'fas fa-bell-concierge': faBellConcierge,
    'fas fa-broom-ball': faBroomBall,
    'fas fa-bucket': faBucket,
    'fas fa-cart-plus': faCartPlus,
    'fas fa-cart-arrow-down': faCartArrowDown,
    'fas fa-chair': faChair,
    'fas fa-couch': faCouch,
    'fas fa-house-laptop': faHouseLaptop,
    'fas fa-jar': faJar,
    'fas fa-kitchen-set': faKitchenSet,
    'fas fa-lightbulb': faSolidLightbulb,
    'fas fa-magnet': faMagnet,
    'fas fa-object-ungroup': faObjectUngroup,
    'fas fa-ruler-combined': faRulerCombined,
    'fas fa-shapes': faShapes,
    'fas fa-swatchbook': faSwatchbook,
    'fas fa-toolbox': faToolbox,
    'fas fa-treasure-chest': faTreasureChest,
    'fas fa-candle-holder': faCandleHolder,
    // Security & Identity
    'fas fa-lock-open': faLockOpen,
    'fas fa-unlock': faUnlock,
    'fas fa-passport': faPassport,
    'fas fa-id-badge': faIdBadge,
    'fas fa-id-card': faIdCard,
    'fas fa-user-graduate': faUserGraduate,
    'fas fa-user-doctor': faUserDoctor,
    'fas fa-user-ninja': faUserNinja,
    'fas fa-user-astronaut': faUserAstronaut,
    'fas fa-user-group': faUserGroup,
    'fas fa-user-clock': faUserClock,
    'fas fa-user-minus': faUserMinus,
    'fas fa-handcuffs': faHandcuffs,
    'fas fa-shield-check': faShieldCheck,
    'fas fa-shield-cat': faShieldCat,
    'fas fa-shield-dog': faShieldDog,
    // Misc & Fun
    'fas fa-spaghetti-monster-flying': faSpaghettiMonsterFlying,
    'fas fa-poo': faPoo,
    'fas fa-poop': faPoop,
    'fas fa-alien': faAlien,
    'fas fa-virus': faVirus,
    'fas fa-bacteria': faBacteria,
    'fas fa-explosion': faExplosion,
    'fas fa-bomb': faBomb,
    'fas fa-person-falling': faPersonFalling,
    'fas fa-plug-circle-bolt': faPlugCircleBolt,
    'fas fa-plug-circle-check': faPlugCircleCheck,
    'fas fa-spider-web': faSpiderWeb,
    // Books
    'fas fa-gem': faGem,
    'fas fa-book-atlas': faBookAtlas,
    'fas fa-book-bible': faBookBible,
    'fas fa-book-journal-whills': faBookJournalWhills,
    'fas fa-book-skull': faBookSkull,
    'fas fa-book-quran': faBookQuran,
    'fas fa-book-tanakh': faBookTanakh,
    // Cloud
    'fas fa-cloud-arrow-up': faCloudArrowUp,
    'fas fa-cloud-arrow-down': faCloudArrowDown,
    // Circle variants
    'fas fa-circle-plus': faCirclePlus,
    'fas fa-circle-minus': faCircleMinus,
    'fas fa-circle-arrow-right': faCircleArrowRight,
    'fas fa-circle-arrow-left': faCircleArrowLeft,
    'fas fa-circle-arrow-up': faCircleArrowUp,
    'fas fa-circle-arrow-down': faCircleArrowDown,
    'fas fa-circle-dot': faCircleDot,
    'fas fa-circle-notch': faCircleNotch,
    'fas fa-circle-play': faCirclePlay,
    'fas fa-circle-pause': faCirclePause,
    'fas fa-circle-stop': faCircleStop,
    // Square variants
    'fas fa-square-plus': faSquarePlus,
    'fas fa-square-minus': faSquareMinus,
    'fas fa-square-check': faSquareCheck,
    'fas fa-square-xmark': faSquareXmark,
    'fas fa-square-arrow-up-right': faSquareArrowUpRight,
    'fas fa-square-poll-vertical': faSquarePollVertical,
    'fas fa-square-pen': faSquarePen,
    // Media playback
    'fas fa-play': faPlay,
    'fas fa-pause': faPause,
    'fas fa-stop': faStop,
    'fas fa-forward': faForward,
    'fas fa-backward': faBackward,
    'fas fa-forward-step': faForwardStep,
    'fas fa-backward-step': faBackwardStep,
    'fas fa-shuffle': faShuffle,
    'fas fa-repeat': faRepeat,
    'fas fa-record-vinyl': faRecordVinyl,
    // Windows
    'fas fa-window-maximize': faWindowMaximize,
    'fas fa-window-minimize': faWindowMinimize,
    'fas fa-window-restore': faWindowRestore,
    // Containers
    'fas fa-cubes-stacked': faCubesStacked,
    'fas fa-box-open': faBoxOpen,
    'fas fa-boxes-stacked': faBoxesStacked,
    // Legal & Business
    'fas fa-handshake-simple': faHandshakeSimple,
    'fas fa-scale-unbalanced': faScaleUnbalanced,
    'fas fa-scale-unbalanced-flip': faScaleUnbalancedFlip,
    'fas fa-clipboard-list': faClipboardList,
    // Houses
    'fas fa-house-flag': faHouseFlag,
    'fas fa-house-flood-water': faHouseFloodWater,
    'fas fa-house-medical': faHouseMedical,
    // Towers & Communication
    'fas fa-tower-broadcast': faTowerBroadcast,
    'fas fa-tower-observation': faTowerObservation,
    'fas fa-tower-cell': faTowerCell,
    'fas fa-satellite': faSatellite,
    'fas fa-satellite-dish': faSatelliteDish,
    'fas fa-radar': faRadar,
    // Water & Activities
    'fas fa-water-ladder': faWaterLadder,
    'fas fa-person-drowning': faPersonDrowning,
    'fas fa-person-digging': faPersonDigging,
    // Messages
    'fas fa-message': faMessage,
    'fas fa-message-dots': faMessageDots,
    'fas fa-message-lines': faMessageLines,
    'fas fa-message-plus': faMessagePlus,
    'fas fa-message-minus': faMessageMinus,
    'fas fa-message-check': faMessageCheck,
    'fas fa-message-xmark': faMessageXmark,
    // File variants
    'fas fa-file-shield': faFileShield,
    'fas fa-file-lock': faFileLock,
    'fas fa-file-pen': faFilePen,
    'fas fa-file-check': faFileCheck,
    'fas fa-file-minus': faFileMinus,
    'fas fa-file-plus': faFilePlus,
    // Tables
    'fas fa-table-columns': faTableColumns,
    'fas fa-table-layout': faTableLayout,
    // Gauges
    'fas fa-gauge-high': faGaugeHigh,
    'fas fa-gauge-simple': faGaugeSimple,
    'fas fa-gauge-simple-high': faGaugeSimpleHigh,
    // Flags
    'fas fa-flag-checkered': faFlagCheckered,
    'fas fa-flag-swallowtail': faFlagSwallowtail,
    // Combat & Fantasy
    'fas fa-helmet-battle': faHelmetBattle,
    'fas fa-swords': faSwords,
    'fas fa-sword': faSword,
    'fas fa-axe': faAxe,
    'fas fa-axe-battle': faAxeBattle,
    'fas fa-bow-arrow': faBowArrow,
    'fas fa-crosshairs': faCrosshairs,
    // Duotone variants
    'fa-duotone fa-shield': faDuotoneShield,
    'fa-duotone fa-star': faDuotoneStar,
    'fa-duotone fa-heart': faDuotoneHeart,
    'fa-duotone fa-bell': faDuotoneBell,
    'fa-duotone fa-gear': faDuotoneGear,
    'fa-duotone fa-user': faDuotoneUser,
    'fa-duotone fa-users': faDuotoneUsers,
    'fa-duotone fa-envelope': faDuotoneEnvelope,
    'fa-duotone fa-lock': faDuotoneLock,
    'fa-duotone fa-key': faDuotoneKey,
    'fa-duotone fa-bolt': faDuotoneBolt,
    'fa-duotone fa-fire': faDuotoneFire,
    'fa-duotone fa-rocket': faDuotoneRocket,
    'fa-duotone fa-crown': faDuotoneCrown,
    'fa-duotone fa-trophy': faDuotoneTrophy,
    'fa-duotone fa-medal': faDuotoneMedal,
    'fa-duotone fa-gem': faDuotoneGem,
    'fa-duotone fa-wand-magic-sparkles': faDuotoneWandMagicSparkles,
    'fa-duotone fa-brain': faDuotoneBrain,
    'fa-duotone fa-robot': faDuotoneRobot,
    'fa-duotone fa-gamepad': faDuotoneGamepad,
    'fa-duotone fa-music': faDuotoneMusic,
    'fa-duotone fa-camera': faDuotoneCamera,
    'fa-duotone fa-globe': faDuotoneGlobe,
    'fa-duotone fa-cloud': faDuotoneCloud,
    'fa-duotone fa-server': faDuotoneServer,
    'fa-duotone fa-database': faDuotoneDatabase,
    'fa-duotone fa-code': faDuotoneCode,
    'fa-duotone fa-terminal': faDuotoneTerminal,
    'fa-duotone fa-bug': faDuotoneBug,
    'fa-duotone fa-chart-line': faDuotoneChartLine,
    'fa-duotone fa-chart-pie': faDuotoneChartPie,
    'fa-duotone fa-gauge': faDuotoneGauge,
    'fa-duotone fa-calendar': faDuotoneCalendar,
    'fa-duotone fa-clock': faDuotoneClock,
    'fa-duotone fa-bookmark': faDuotoneBookmark,
    'fa-duotone fa-folder': faDuotoneFolder,
    'fa-duotone fa-file': faDuotoneFile,
    'fa-duotone fa-circle-check': faDuotoneCircleCheck,
    'fa-duotone fa-circle-xmark': faDuotoneCircleXmark,
    'fa-duotone fa-shield-halved': faDuotoneShieldHalved,
    'fa-duotone fa-eye': faDuotoneEye,
    'fa-duotone fa-comments': faDuotoneComments,
    'fa-duotone fa-hashtag': faDuotoneHashtag,
    'fa-duotone fa-at': faDuotoneAt,
    'fa-duotone fa-link': faDuotoneLink,
    'fa-duotone fa-qrcode': faDuotoneQrcode,
    'fa-duotone fa-puzzle-piece': faDuotonePuzzlePiece
};

export {faFolder};
