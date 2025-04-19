import MDXComponents from '@theme-original/MDXComponents';
import IncludedInPlan from '@site/src/components/IncludedInPlan';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PlanPrice from '../components/PlanPrice';
import ModuleOverview from '../components/ModuleOverview';
import SlashCommandExplanation from '../components/SlashCommandExplanation';
import Video from '../components/Video';

export default {
    ...MDXComponents,
    IncludedInPlan,
    Video,
    TabItem,
    ModuleOverview,
    Tabs,
    SlashCommandExplanation,
    PlanPrice
};