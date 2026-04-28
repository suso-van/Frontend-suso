import { Component, type ErrorInfo, type ReactNode } from 'react';

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
  message: string | null;
}

export default class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = {
    hasError: false,
    message: null,
  };

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return {
      hasError: true,
      message: error?.message || 'Unexpected runtime error',
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App crashed during render', error, errorInfo);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#020617',
          color: '#f8fafc',
          padding: '24px',
        }}
      >
        <div
          style={{
            maxWidth: '560px',
            width: '100%',
            textAlign: 'center',
            border: '1px solid rgba(148, 163, 184, 0.25)',
            borderRadius: '16px',
            padding: '28px 24px',
            background: 'rgba(15, 23, 42, 0.8)',
          }}
        >
          <h1 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>
            Frontend runtime error detected
          </h1>
          <p style={{ opacity: 0.8, marginBottom: '20px', lineHeight: 1.5 }}>
            {this.state.message || 'Something broke while rendering the app.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              border: 'none',
              borderRadius: '10px',
              padding: '10px 18px',
              fontWeight: 600,
              background: '#10b981',
              color: '#052e16',
              cursor: 'pointer',
            }}
          >
            Reload
          </button>
        </div>
      </div>
    );
  }
}
