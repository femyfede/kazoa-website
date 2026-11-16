import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Building2,
  Users,
  Settings,
  LogOut,
  Menu,
  ChevronLeft,
  ChevronRight,
  Building,
  Newspaper,
  Mail,
  Bell,
  User,
} from 'lucide-react';
import { useAuth } from './AuthContext';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Site Content', href: '/admin/content', icon: FileText, children: [
    { name: 'Hero Section', href: '/admin/content/hero' },
    { name: 'About Section', href: '/admin/content/about' },
    { name: 'Construction Process', href: '/admin/content/process' },
    { name: 'Construction Stages', href: '/admin/content/stages' },
    { name: 'Quality & Safety', href: '/admin/content/quality' },
    { name: 'Financial Section', href: '/admin/content/financial' },
    { name: 'Project Journey', href: '/admin/content/journey' },
    { name: 'Gallery', href: '/admin/content/gallery' },
    { name: 'FAQs', href: '/admin/content/faqs' },
    { name: 'CTA Section', href: '/admin/content/cta' },
    { name: 'Site Settings', href: '/admin/content/settings' },
  ]},
  { name: 'Projects', href: '/admin/projects', icon: Building2 },
  { name: 'Blog/News', href: '/admin/blog', icon: Newspaper, children: [
    { name: 'All Posts', href: '/admin/blog' },
    { name: 'Categories', href: '/admin/blog/categories' },
    { name: 'Create Post', href: '/admin/blog/create' },
  ]},
  { name: 'Contact Submissions', href: '/admin/contacts', icon: Mail },
  { name: 'Newsletter', href: '/admin/newsletter', icon: Users },
  { name: 'Users', href: '/admin/users', icon: User },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminLayout() {
  const { user, signOut, profile } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = (name: string) => {
    setExpandedMenus(prev => prev.includes(name) 
      ? prev.filter(m => m !== name) 
      : [...prev, name]
    );
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:static inset-y-0 left-0 z-50 bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col',
          collapsed ? 'w-20' : 'w-64',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Logo */}
        <div className={cn(
          'flex items-center justify-between h-16 px-4 border-b border-slate-200',
          collapsed && 'justify-center'
        )}>
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            {!collapsed && (
              <span className="font-bold text-xl text-slate-900">Kazoa Admin</span>
            )}
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              'p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors',
              collapsed && 'ml-auto'
            )}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1" aria-label="Main navigation">
          {navigation.map((item) => {
            const isExpanded = expandedMenus.includes(item.name);
            const hasChildren = item.children && item.children.length > 0;
            
            return (
              <div key={item.name}>
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={cn(
                        'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                        'hover:bg-slate-100 text-slate-600 hover:text-slate-900',
                        collapsed && 'justify-center px-2'
                      )}
                      aria-expanded={isExpanded}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      {!collapsed && <span className="flex-1 text-left">{item.name}</span>}
                      {!collapsed && (
                        <svg className={cn(
                          'w-4 h-4 transition-transform',
                          isExpanded && 'rotate-180'
                        )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    {!collapsed && isExpanded && (
                      <div className="mt-1 ml-10 space-y-1 animate-in slide-in-from-top-2 duration-200">
                        {item.children!.map((child) => (
                          <NavLink
                            key={child.name}
                            to={child.href}
                            className={({ isActive }) => cn(
                              'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                              isActive 
                                ? 'bg-blue-50 text-blue-700 font-medium' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            )}
                            onClick={() => setSidebarOpen(false)}
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => cn(
                      'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                      'hover:bg-slate-100',
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-600 hover:text-slate-900',
                      collapsed && 'justify-center px-2'
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    {!collapsed && <span>{item.name}</span>}
                  </NavLink>
                )}
              </div>
            );
          })}
        </nav>

        {/* User & Sign Out */}
        <div className={cn('p-3 border-t border-slate-200', collapsed && 'px-2')}>
          <div className={cn('flex items-center gap-3', collapsed && 'justify-center')}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-medium text-sm">
                {profile?.full_name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'A'}
              </span>
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{profile?.full_name || user?.email}</p>
                <p className="text-xs text-slate-500 truncate capitalize">{profile?.role}</p>
              </div>
            )}
          </div>
          <button
            onClick={handleSignOut}
            className={cn(
              'mt-3 w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors',
              collapsed && 'justify-center px-2'
            )}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={cn(
        'lg:pl-64 transition-all duration-300',
        collapsed ? 'lg:pl-20' : ''
      )}>
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b border-slate-200">
          <div className="flex items-center justify-between h-16 px-4 lg:px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex-1 lg:flex-none">
              <h1 className="text-lg font-semibold text-slate-900">Kazoa Admin Panel</h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              
              <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 bg-slate-50 rounded-lg">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">
                    {profile?.full_name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'A'}
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-700">{profile?.full_name || 'Admin'}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}