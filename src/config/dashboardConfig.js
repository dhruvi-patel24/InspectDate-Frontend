import {
  Calendar,
  FolderKanban,
  ArrowRightLeft,
  FileSpreadsheet,
  ClipboardList,
  Landmark,
  Briefcase,
  Building2,
  Users,
  Mail,
  UserCircle,
  CreditCard,
  HelpCircle
} from 'lucide-react';
import { ROUTES } from '../routes/routePaths';

export const dashboardConfig = {
  menuItems: [
    { label: 'Calendar', icon: Calendar, path: ROUTES.calendar },
    { label: 'Projects', icon: FolderKanban, path: ROUTES.projects },
    { label: 'Project Transfers', icon: ArrowRightLeft, path: ROUTES.project_transfers },
    { label: 'E-Budget Templates', icon: FileSpreadsheet, path: ROUTES.ebudget_templates },
    { label: 'Inspection Requests', icon: ClipboardList, path: ROUTES.inspection_requests },
    { label: 'Banks', icon: Landmark, path: ROUTES.banks },
    { label: 'Lending Pros', icon: Briefcase, path: ROUTES.lending_pros },
    { label: 'Company', icon: Building2, path: ROUTES.company },
    { label: 'Inspectors', icon: Users, path: ROUTES.inspectors },
    { label: 'Pending Invitations', icon: Mail, path: ROUTES.pending_invitations },
    { label: 'My Org/Comp', icon: Building2, path: ROUTES.my_org },
    { label: 'My Profile', icon: UserCircle, path: ROUTES.my_profile },
    { label: 'Contact Us', icon: HelpCircle, path: ROUTES.contact_us },
    { label: 'Billing', icon: CreditCard, path: ROUTES.billing }
  ]
};
