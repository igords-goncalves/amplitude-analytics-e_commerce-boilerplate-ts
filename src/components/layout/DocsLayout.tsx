import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { docsNavigation } from '../../constants/docsNavigation';

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="flex">
        <aside className="w-64 min-h-screen border-r border-gray-200 dark:border-gray-800 p-6 overflow-y-auto">
          <Link to="/docs" className="block mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Documentação
            </h2>
          </Link>

          <nav className="space-y-8">
            {docsNavigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              to="/"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              ← Voltar para o App
            </Link>
          </div>
        </aside>

        <main className="flex-1 px-8 py-8 max-w-4xl">
          <article className="prose prose-slate dark:prose-invert max-w-none">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}
