import React, { lazy } from 'react';
import WindowHeader from './window-header';
import { RmgErrorBoundary, RmgLoader, RmgThemeProvider, RmgWindow } from '@railmapgen/rmg-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const TemplatesView = lazy(() => import('./templates-view/templates-view'));
const TicketView = lazy(() => import('./ticket-view/ticket-view'));

export default function AppRoot() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <RmgThemeProvider>
                <RmgWindow>
                    <WindowHeader />
                    <Routes>
                        <Route
                            path="/new"
                            element={
                                <RmgErrorBoundary suspenseFallback={<RmgLoader isIndeterminate />}>
                                    <TicketView />
                                </RmgErrorBoundary>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <RmgErrorBoundary suspenseFallback={<RmgLoader isIndeterminate />}>
                                    <TemplatesView />
                                </RmgErrorBoundary>
                            }
                        />
                    </Routes>
                </RmgWindow>
            </RmgThemeProvider>
        </BrowserRouter>
    );
}
