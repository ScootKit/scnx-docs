import MDXComponents from '@theme-original/MDXComponents';
import IncludedInPlan from '@site/src/components/IncludedInPlan';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PlanPrice from '../components/PlanPrice';
import ModuleOverview from '../components/ModuleOverview';
import SlashCommandExplanation from '../components/SlashCommandExplanation';
import Video from '../components/Video';
import OutdatedWarning from '../components/OutdatedWartning';

export default {
    ...MDXComponents,
    IncludedInPlan,
    Video,
    TabItem,
    ModuleOverview,
    OutdatedWarning,
    Tabs,
    SlashCommandExplanation,
    PlanPrice
};