import * as RadixTabs from '@radix-ui/react-tabs';
import { StyledTab, StyledTabList } from './styles.css';

export function Tabs() {
  return (
  <RadixTabs.Root className="TabsRoot" defaultValue="tab1">
    <RadixTabs.List className={StyledTabList} aria-label="Manage your account">
      <RadixTabs.Trigger value="tab1" className={StyledTab}>
        Account
      </RadixTabs.Trigger>
      <RadixTabs.Trigger className={StyledTab} value="tab2">
        Password
      </RadixTabs.Trigger>
      <RadixTabs.Trigger className={StyledTab} value="tab3">
        Password
      </RadixTabs.Trigger>
    </RadixTabs.List>
    <RadixTabs.Content className="TabsContent" value="tab1">
    </RadixTabs.Content>
    <RadixTabs.Content className="TabsContent" value="tab2">
    </RadixTabs.Content>
  </RadixTabs.Root>
)
}

export default Tabs;